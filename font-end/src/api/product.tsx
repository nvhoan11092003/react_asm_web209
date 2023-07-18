import instance from "../instance/instance";
import { IProduct } from "../models/type";


const getAll = () =>{
    return instance.get("/api/products")
}

const getOne = (id:string) =>{
    return instance.get("/api/products/"+id)
}

const addProduct = (product:IProduct) =>{
    return instance.post("/api/products",product)
}

const deleteProduct = (id:string) =>{
    return instance.delete("/api/products/"+id)
}

const updateProduct = (product:IProduct) =>{
    return instance.put("/api/products/"+product._id,product)
}

export {getAll, getOne, addProduct, deleteProduct, updateProduct}