import instance from "../instance/instance";
import { ICategory } from "../models/type";

const getAllCategory = () => {
  return instance.get("/categories");
};

const getOneCategory = (id: string) => {
  return instance.get("/categories/" + id);
};

const addCategory = (category: ICategory) => {
  return instance.post("/categories", category);
};

const deleteCategory = (id: string) => {
  return instance.delete("/categories/" + id);
};

const updateCategory = (category: ICategory) => {
  return instance.put("categories/" + category._id, category);
};

export {
  getAllCategory,
  getOneCategory,
  addCategory,
  deleteCategory,
  updateCategory,
};
