import instance from "../instance/instance";
import { ICategory } from "../models/type";


const getAll = () =>{
    return instance.get("/api/category")
}

const getOne = (id:string) =>{
    return instance.get("/api/category/"+id)
}

const addProduct = (category:ICategory) =>{
    return instance.post("/api/category",category)
}

const deleteCategory = (id:string) =>{
    return instance.delete("/api/category/"+id)
}

const updateCategory = (category:ICategory) =>{
    return instance.put("/api/category/"+category._id,category)
}

export {getAll, getOne, addProduct, deleteCategory, updateCategory}