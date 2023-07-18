import express from "express"
import { createOrder } from "../controller/orders"
import {checkPermissionOrder} from "../middlewares/checkPermissionOrder"

const router = express.Router()
router.post("/order",checkPermissionOrder,createOrder)

export default router