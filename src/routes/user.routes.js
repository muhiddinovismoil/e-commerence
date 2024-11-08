import { Router } from "express";
import { authGuard, roleGuard } from "../middleware/index.js";
import { userController } from "../controllers/index.js";

export const userRouter = new Router();

userRouter.post("/profile", authGuard, userController);
