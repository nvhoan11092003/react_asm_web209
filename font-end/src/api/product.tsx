import instance from "../instance/instance";
import { IProduct } from "../models/type";

const getAllProduct = () => {
  return instance.get("/api/products");
};

const getOneProduct = (id: string) => {
  return instance.get("/api/products/" + id);
};

const addProduct = (product: IProduct) => {
  return instance.post("/api/products", product);
};

const deleteProduct = (id: string) => {
  return instance.delete("/api/products/" + id);
};

const updateProduct = (product: IProduct) => {
  const name = product.name;
  const price = product.price;
  const originPrice = product.originPrice;
  const processingInstructions = product.processingInstructions;
  const storageInstructions = product.storageInstructions;
  const description = product.description;
  const categoryId = product.categoryId;
  const imgUrl = product.imgUrl;
  return instance.put("/api/products/" + product._id, {
    name,
    price,
    originPrice,
    processingInstructions,
    storageInstructions,
    description,
    categoryId,
    imgUrl
  });
};

export {
  getAllProduct,
  getOneProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
