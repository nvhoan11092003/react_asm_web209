import instance from "../instance/instance";
import { IUser } from "../models/type";

const signup = (user: IUser) => {
  return instance.post("/api/signup", user);
};

const signin = (user: IUser) => {
  return instance.post("/api/signin", user);
};

const forgotPassword = (password: IUser) => {
  return instance.post("/api/forgot-password", password);
};

const changePassword = (password: IUser) => {
  return instance.post("/api/change-password", password);
};

const getAllUser = () => {
  return instance.get("/api/users");
};

const deleteUser = (id: string) => {
  return instance.delete("/api/users/" + id);
};

export {
  signin,
  signup,
  forgotPassword,
  changePassword,
  getAllUser,
  deleteUser,
};
