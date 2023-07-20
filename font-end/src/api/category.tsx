import instance from "../instance/instance";
import { ICategory } from "../models/type";

const getAllCategory = () => {
  return instance.get("/api/category");
};

const getOneCategory = (id: string) => {
  return instance.get("/api/category/" + id);
};

const addCategory = (category: ICategory) => {
  return instance.post("/api/category", category);
};

const deleteCategory = (id: string) => {
  return instance.delete("/api/category/" + id);
};

const updateCategory = (category: ICategory) => {
  const name = category.name;
  return instance.put("/api/category/" + category._id, { name });
};

export {
  getAllCategory,
  getOneCategory,
  addCategory,
  deleteCategory,
  updateCategory,
};
