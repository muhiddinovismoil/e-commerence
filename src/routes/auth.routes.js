import { Router } from "express";
import { authLoginCon, authRegisterCon } from "../controllers/index.js";

export const authRoutes = new Router();

authRoutes.post("/register", authRegisterCon);
authRoutes.post("/login", authLoginCon);
