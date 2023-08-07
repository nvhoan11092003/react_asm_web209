import instance from "../instance/instance";
import { ICart } from "../models/type";

export const getAllCart = () => {
  // Bước 1: Lấy chuỗi JSON từ local storage
  const userJSON = JSON.parse(localStorage.getItem("user") ?? "");

  // Truy cập accessToken từ đối tượng người dùng
  const accessToken = userJSON.accessToken;

  // Sử dụng accessToken trong yêu cầu của bạn
  return instance.get("/api/cart", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const addToCart = (cart: ICart) => {
  //   const userJSON = JSON.parse(localStorage.getItem("user") ?? "");

  // Truy cập accessToken từ đối tượng người dùng
  //   const accessToken = userJSON.accessToken;
  console.log(cart);

  return instance.post("/api/cart", cart);
};

export const deleteCart = (id: string) => {
  const token = localStorage.getItem("token") ?? "";
  return instance.delete("/api/cart/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
