import express from "express"
import { createOrder, getAllOrder } from "../controller/orders"
import {checkPermissionOrder} from "../middlewares/checkPermissionOrder"

const router = express.Router()
router.post("/order",createOrder)
router.get("/order",getAllOrder)
export default router