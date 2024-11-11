import { Router } from "express";
import { loginController, registerController } from "../controllers/index.js";
import { authGuard, roleGuard } from "../middleware/index.js";

export const articleRouter = new Router();

articleRouter.get("/", loginController);
articleRouter.get("/:id", loginController);
articleRouter.post(
  "/",
  authGuard,
  roleGuard("admin", "superAdmin"),
  registerController
);
articleRouter.put(
  "/",
  authGuard,
  roleGuard("admin", "superAdmin"),
  loginController
);
articleRouter.delete(
  "/",
  authGuard,
  roleGuard("admin", "superAdmin"),
  loginController
);
