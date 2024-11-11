import jwt from "jsonwebtoken";
import { User } from "../modules/index.js";
import {
  statusCodes,
  errorMessages,
  ApiError,
  logger,
} from "../utils/index.js";

export const registerController = async (req, res, next) => {
  try {
    const { email, role } = req.body;
    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      console.log({ currentUser });
      const user = new User(req.body);
      console.log({ user });

      await user.save();
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
