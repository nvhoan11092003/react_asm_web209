import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/layout/AdminLayout";
import DashBoard from "./pages/DashBoard";
import Form from "./pages/Form";
import Chart from "./pages/Chart";
import ListProduct from "./pages/admin/products/list-product";
import AddProduct from "./pages/admin/products/add-product";
import { useEffect, useState } from "react";
import { IProduct } from "./types/product";
import { ICategory } from "./types/category";
import {
  getAllProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./api/product";
import UpdateProduct from "./pages/admin/products/update-product";
import {
  getAllCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "./api/category";
import ListCategory from "./pages/admin/categories/list-category";
import AddCategory from "./pages/admin/categories/add-category";
import UpdateCategory from "./pages/admin/categories/update-category";
import WebsiteLayouts from "./Layouts/websiteLayouts";
import HomePage from "./pages/clientPages/HomePage";
import AboutPage from "./pages/clientPages/AboutPage";
import ServicePage from "./pages/clientPages/ServicePage";
import MenuPage from "./pages/clientPages/MenuPage";
import ContactPage from "./pages/clientPages/ContactPage";
import BookingPage from "./pages/clientPages/BookingPage";
import TeamPage from "./pages/clientPages/TeamPage";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, []);

  const onHandleRemoveProduct = (id: number) => {
    deleteProduct(id).then(() =>
      setProducts(products.filter((item: IProduct) => item.id !== id))
    );
  };

  const onHandleAddProduct = (product: IProduct) => {
    addProduct(product).then(() =>
      getAllProduct().then(({ data }) => setProducts(data))
    );
  };

  const onHandleUpdateProduct = (product: IProduct) => {
    updateProduct(product).then(() =>
      getAllProduct().then(({ data }) => setProducts(data))
    );
  };

  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, []);

  const onHandleRemoveCategory = (id: number) => {
    deleteCategory(id).then(() =>
      setCategories(categories.filter((item: ICategory) => item.id !== id))
    );
  };

  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category).then(() =>
      getAllCategory().then(({ data }) => setCategories(data))
    );
  };

  const onHandleUpdateCategory = (category: ICategory) => {
    updateCategory(category).then(() =>
      getAllCategory().then(({ data }) => setCategories(data))
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/*   client */}
        <Route path="/" element={<WebsiteLayouts />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
        {/* admin  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="form" element={<Form />} />
          <Route path="chart" element={<Chart />} />
          <Route path="products">
            <Route
              index
              element={
                <ListProduct
                  products={products}
                  onRemove={onHandleRemoveProduct}
                />
              }
            />
            <Route
              path="add"
              element={<AddProduct onAdd={onHandleAddProduct} />}
            />
            <Route
              path=":id/update"
              element={
                <UpdateProduct
                  onUpdate={onHandleUpdateProduct}
                  products={products}
                />
              }
            />
          </Route>
          <Route path="categories">
            <Route
              index
              element={
                <ListCategory
                  categories={categories}
                  onRemove={onHandleRemoveCategory}
                />
              }
            />
            <Route
              path="add"
              element={<AddCategory onAdd={onHandleAddCategory} />}
            />
            <Route
              path=":id/update"
              element={
                <UpdateCategory
                  categories={categories}
                  onUpdate={onHandleUpdateCategory}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
