import jwt from "jsonwebtoken";
import { OTP, User } from "../modules/index.js";
import {
  statusCodes,
  errorMessages,
  ApiError,
  logger,
} from "../utils/index.js";
import { otpGenerator, sendMail } from "../helpers/index.js";

export const registerController = async (req, res, next) => {
  try {
    const { email } = req.body;

    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      const otp = otpGenerator();

      await sendMail(email, "OTP", `this is your OTP: ${otp}`);

      const user = new User(req.body);
      await user.save();

      const db_otp = new OTP({
        user_id: user._id,
        otp_code: otp,
      });

      await db_otp.save();
      return res.status(statusCodes.CREATED).send("created");
    }
    return res
      .status(statusCodes.CONFLICT)
      .send(errorMessages.EMAIL_ALREADY_EXISTS);
  } catch (error) {
    console.log(error);
    next(new ApiError(error.statusCode, error.message));
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      return res
        .status(statusCodes.NOT_FOUND)
        .send(errorMessages.USER_NOT_FOUND);
    }

    const passwordIsEqual = await currentUser.compare(password);

    console.log(passwordIsEqual);
    if (!passwordIsEqual) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .send(errorMessages.INVALID_CREDENTIALS);
    }

    const payload = {
      sub: email,
      role: currentUser.role,
    };

    const accessSecretKey = process.env.JWT_ACCESS_SECRET;
    const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

    const accessToken = jwt.sign(payload, accessSecretKey, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });

    const refreshToken = jwt.sign(payload, refreshSecretKey, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });

    return res.send({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const refreshTokenController = async (req, res, next) => {
  try {
    const { token } = req.body;
    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (error, decode) => {
      if (error)
        throw new Error(statusCodes.FORBIDDEN, errorMessages.FORBIDDEN);

      logger.info({ decode });

      const accessToken = jwt.sign(
        {
          sub: decode.sub,
          role: decode.role,
        },
        process.env.JWT_ACCESS_SECRET,
        {
          expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        }
      );

      return res.send({ accessToken, refreshToken: token });
    });
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const verifyController = async (req, res, next) => {
  try {
    const { otp, email } = req.body;

    const currentUser = await User.findOne({ email });
    const currentOtp = await OTP.findOne({ user_id: currentUser._id });

    const isEqual = currentOtp.verify(otp);

    if (!isEqual) {
      return res.send("OTP is not valid");
    }

    await OTP.deleteOne({ user_id: currentUser._id });
    await User.updateOne(
      { email },
      {
        is_active: true,
      }
    );

    res.send("user is actived");
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
