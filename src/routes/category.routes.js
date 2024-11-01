import { Router } from "express";
import {
  createCategoryCon,
  getAllCategoryCon,
  getByIdCategoryCon,
  removeByIdCategoryCon,
  updateCategoryCon,
} from "../controllers/index.js";

export const categoryRoutes = new Router();

categoryRoutes.post("/", createCategoryCon);
categoryRoutes.get("/", getAllCategoryCon);
categoryRoutes.put("/:id", updateCategoryCon);
categoryRoutes.delete("/:id", removeByIdCategoryCon);
categoryRoutes.get("/:id", getByIdCategoryCon);
