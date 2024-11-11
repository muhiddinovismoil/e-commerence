import { User } from "../modules/index.js";
import { statusCodes, errorMessages, ApiError } from "../utils/index.js";

export const userController = async (req, res, next) => {
  try {
    const payload = req.user;

    console.log(payload);
    const currentUser = await User.findOne({ email: payload.sub }).select({
      password: 0,
    });

    console.log(currentUser);

    if (!currentUser) {
      return res
        .status(statusCodes.NOT_FOUND)
        .send(errorMessages.USER_NOT_FOUND);
    }

    return res.send(currentUser);
  } catch (error) {
    next(new ApiError(error.statusCodes, error.message));
  }
};
