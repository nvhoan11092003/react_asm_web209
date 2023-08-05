import express from "express"
import { createOrder, getAllOrder } from "../controller/orders"
import {checkPermissionOrder} from "../middlewares/checkPermissionOrder"

const router = express.Router()
router.post("/order",checkPermissionOrder,createOrder)
router.get("/order",checkPermissionOrder,getAllOrder)
export default router