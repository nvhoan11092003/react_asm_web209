import express from "express";
import { addToCart, deleteCart, getCart } from "../controller/cart.js";
import { checkPermissionCart } from "../middlewares/checkPermissionCart.js";
const router = express.Router();
router.post("/cart", checkPermissionCart, addToCart);
router.get("/cart", checkPermissionCart, getCart);
router.delete("/cart/:id", checkPermissionCart, deleteCart);

export default router;
