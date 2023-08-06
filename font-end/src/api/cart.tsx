import instance from "../instance/instance";
import { ICart } from "../models/type";

export const getAllCart = () => {
  return instance.get("/api/cart");
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
