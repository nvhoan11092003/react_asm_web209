import instance from "../instance/instance";
import { ICart } from "../models/type";

export const getAllCart =  () => {
    return instance.get("/api/cart")
}

export const addToCart = (cart:ICart) => {
    const token = JSON.parse(localStorage.getItem("token")?? "")
    return instance.post("/api/cart",cart,{
        headers: {
            "Content-Type" : "applicatipon/json",
            Authorization: `Bearer ${token}`
        }
    })
}
