export const authMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};

// authMiddleware(registerSchema);
// authMiddleware(loginSchema);

// const a = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
