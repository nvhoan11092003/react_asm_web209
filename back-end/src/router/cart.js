import express from "express"
import { addToCart, getCart } from "../controller/cart"
import {checkPermissionCart} from "../middlewares/checkPermissionCart"
const router = express.Router()
router.post("/cart",checkPermissionCart,addToCart)
router.get("/cart",checkPermissionCart,getCart)

export default router