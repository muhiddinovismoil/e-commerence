import { Router } from "express";
import {
  authLoginCon,
  authRegisterCon,
  authGetRegisterCon,
  authGetLoginCon,
  authGetMeCon,
} from "../controllers/index.js";
import { LoginSchema, RegisterSchema } from "../schema/index.js";
import { authMiddleware } from "../middleware/index.js";
export const authRoutes = new Router();

authRoutes.post("/register", authMiddleware(RegisterSchema), authRegisterCon);
authRoutes.get("/register", ,paginationMiddleware(), authGetRegisterCon);
authRoutes.post("/login", authMiddleware(LoginSchema), authLoginCon);
authRoutes.get("/login", authGetLoginCon);
authRoutes.get("/me", authGetMeCon);
