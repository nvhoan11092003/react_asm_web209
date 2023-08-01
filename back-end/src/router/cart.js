import express from "express"
import { addToCart, deleteCart, getCart } from "../controller/cart"
import {checkPermissionCart} from "../middlewares/checkPermissionCart"
const router = express.Router()
router.post("/cart",checkPermissionCart,addToCart)
router.get("/cart",checkPermissionCart,getCart)
router.delete("/cart/:id",checkPermissionCart,deleteCart)

export default router