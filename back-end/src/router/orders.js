import express from "express"
import { createOrder, deleteOrder, getAllOrder, updateOrder } from "../controller/orders"
import {checkPermissionOrder} from "../middlewares/checkPermissionOrder"

const router = express.Router()

router.post("/order",checkPermissionOrder,createOrder)
router.get("/order",checkPermissionOrder,getAllOrder)
router.delete("/order/:id",checkPermissionOrder,deleteOrder)
router.put("/order/:id",checkPermissionOrder,updateOrder)

export default router