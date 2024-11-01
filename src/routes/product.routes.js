import { Router } from "express";
import {
  createProductCon,
  getAllProductCon,
  getByIdProductCon,
  removeByIdProductCon,
  updateProductCon,
} from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.post("/", createProductCon);
productRoutes.get("/", getAllProductCon);
productRoutes.put("/:id", updateProductCon);
productRoutes.delete("/:id", removeByIdProductCon);
productRoutes.get("/:id", getByIdProductCon);
