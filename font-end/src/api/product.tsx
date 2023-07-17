import instance from "../instance/instance";

export const getAll = () => {
    return instance.get("/api/products")
}