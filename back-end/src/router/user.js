import express from "express"
import { changePassword, forgotPassword, getAllUser, signin, signup } from "../controller/user"

const router = express.Router()
router.post("/signup",signup)
router.post("/signin",signin)
router.post("/forgot-password",forgotPassword)
router.post("/change-password",changePassword)
router.get("/user",getAllUser)
export default router