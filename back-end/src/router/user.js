import express from "express";
import {
  changePassword,
  forgotPassword,
  getAllUser,
  signin,
  signup,
  deleteUser,
} from "../controller/user";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/change-password", changePassword);
router.get("/users", getAllUser);
router.delete("/users/:id", deleteUser);
export default router;
