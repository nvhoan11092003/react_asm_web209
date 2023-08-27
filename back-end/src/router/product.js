import express from "express";
import {
  createProduct,
  deleteProduct,
  getAll,
  getOne,
  searchProduct,
  sortByPriceRange,
  updateProduct,
} from "../controller/products.js";
const router = express.Router();

router.get("/products/search", searchProduct);
router.get("/products/sort-by-price-range", sortByPriceRange);

router.get("/products", getAll);
router.get("/products/:id", getOne);
router.delete("/products/:id", deleteProduct);

router.post("/products", createProduct);
router.put("/products/:id", updateProduct);

export default router;
