import jwt from "jsonwebtoken";
import User from "../models/user";
export const checkPermissionOrder = async (req, res, next) => {
  try {
    // kiểm tra xem user có đăng nhập không
    if (!req.headers.authorization) {
      throw new Error("Bạn phải đăng nhập để thực hiện hành động này");
    }

    // lấy jwt token từ header
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "team 5", async (err, payload) => {
      if (err) {
        if (err.name === "JsonWebTokenError") {
          return res.status(404).json({
            message: "Token không hợp lệ",
          });
        }
        if (err.name === "TokenExpiredError") {
          return res.status(404).json({
            message: "Token hết hạn",
          });
        }
      }
      // Lưu thông tin người dùng vào req.user
      const user = await User.findById(payload._id);
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
