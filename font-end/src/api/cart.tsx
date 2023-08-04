import instance from "../instance/instance";
import { ICart } from "../models/type";

export const getAllCart =  () => {
    const token = localStorage.getItem("token") ?? "";
    return instance.get("/api/cart",{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

export const addToCart = (cart:ICart) => {
    const token = localStorage.getItem("token") ?? "";
    return instance.post("/api/cart",cart,{
        headers: {
            "Content-Type" : "applicatipon/json",
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCart = (id: string) => {
    const token = localStorage.getItem("token") ?? "";
    return instance.delete("/api/cart/"+id,{
        headers:{
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}
