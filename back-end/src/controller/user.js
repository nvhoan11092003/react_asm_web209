import User from "../models/user.js";
import {
  signupSchema,
  signinSchema,
  forgotPasswordSchema,
  changePasswordSchema,
} from "../schema/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (user.length === 0) {
      return res.status(400).json({
        message: "Không có dữ liệu người dùng",
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(401).json({
        message: "Người dùng vừa chọn không còn tồn tại",
      });
    }

    return res.status(200).json({
      message: "Xóa người dùng thành công",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(402).json({
        message: "Email đã tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    if (!newUser) {
      return res.status(401).json({
        message: "Đăng ký không thành công",
      });
    }
    const token = jwt.sign({ _id: newUser._id }, "team 5", { expiresIn: "1h" });
    newUser.password = undefined;
    return res.status(200).json({
      message: "Đăng ký thành công",
      accessToken: token,
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = signinSchema.validate(
      { email, password },
      { abortEarly: false }
    );
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(401).json({
        message: "Tài khoản không tồn tại",
      });
    }
    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Mật khẩu không chính xác",
      });
    }

    const token = jwt.sign({ _id: checkUser._id }, "team 5", {
      expiresIn: "1h",
    });
    checkUser.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken: token,
      checkUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// tạo mới mật khẩu

const generateNewPassword = () => {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let newPassword = "";
  for (let i = 0; i < length; i++) {
    const randomPass = Math.floor(Math.random() * charset.length);
    newPassword += charset.charAt(randomPass);
  }
  return newPassword;
};

// lấy lại mật khẩu bằng email
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const { error } = forgotPasswordSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const checkEmail = await User.findOne({ email });
    if (!checkEmail) {
      return res.status(401).json({
        message: "Email không tồn tại",
      });
    }
    const newPassword = generateNewPassword();
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    checkEmail.password = hashedPassword;
    await checkEmail.save();
    return res.status(200).json({
      message: `Lấy lại mật khẩu thành công: ${newPassword}`,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { email, password, newPassword } = req.body;
    const { error } = changePasswordSchema.validate(
      { email, password, newPassword },
      { abortEarly: false }
    );
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Email không tồn tại",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Mật khẩu hiện tại không chính xác",
      });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({
      message: "Đổi mật khẩu thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
