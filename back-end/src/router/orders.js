import express from "express"
import { createOrder, deleteOrder, getAllOrder, getOrderbyid, getOrderbyiduser, updateOrder } from "../controller/orders"
import {checkPermissionOrder} from "../middlewares/checkPermissionOrder"

const router = express.Router()

router.post("/order",checkPermissionOrder,createOrder)
router.get("/order",getAllOrder)
router.delete("/order/:id",deleteOrder)
router.put("/order/:id", updateOrder)
router.get("/orderbyiduser/:id", getOrderbyiduser)
router.get("/order/:id",getOrderbyid)

export default router