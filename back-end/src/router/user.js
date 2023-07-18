import express from "express"
import { changePassword, forgotPassword, signin, signup } from "../controller/user"

const router = express.Router()
router.post("/signup",signup)
router.post("/signin",signin)
router.post("/forgot-password",forgotPassword)
router.post("/change-password",changePassword)

export default router