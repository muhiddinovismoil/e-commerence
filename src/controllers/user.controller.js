export const userController = (req, res, next) => {
  try {
    const currentUser = req.user;

    console.log(currentUser);

    return res.send(currentUser);
  } catch (error) {
    next(error);
  }
};
