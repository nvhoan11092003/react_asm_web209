import express from "express";
import {
  createCategory,
  deleteCategory,
  getAll,
  getOne,
  updateCategory,
} from "../controller/category.js";

const router = express.Router();

router.post("/category", createCategory);
router.get("/category", getAll);
router.get("/category/:id", getOne);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateCategory);

export default router;
