import { useEffect, useState } from "react";
import { ICategory, IProduct } from "./models/type";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "./api/product";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/category";
import { BrowserRouter, Form, Navigate, Route, Routes } from "react-router-dom";
import WebsiteLayouts from "./Layouts/websiteLayouts";
import HomePage from "./pages/clientPages/HomePage";
import AboutPage from "./pages/clientPages/AboutPage";
import ServicePage from "./pages/clientPages/ServicePage";
import MenuPage from "./pages/clientPages/MenuPage";
import ProductDetail from "./pages/clientPages/ProductDetail";
import ContactPage from "./pages/clientPages/ContactPage";
import BookingPage from "./pages/clientPages/BookingPage";
import TeamPage from "./pages/clientPages/TeamPage";
import AdminLayout from "./Layouts/adminLayout";
import Dashboard from "./pages/adminPages/Dashboard";
import ListProduct from "./pages/admin/products/list-product";
import AddProduct from "./pages/admin/products/add-product";
import UpdateProduct from "./pages/admin/products/update-product";
import ListCategory from "./pages/admin/categories/list-category";
import AddCategory from "./pages/admin/categories/add-category";
import UpdateCategory from "./pages/admin/categories/update-category";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, []);

  const onHandleRemoveProduct = (id: string) => {
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

  const onHandleRemoveCategory = (id: string) => {
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
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="menu">
            <Route index element={<MenuPage />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path=":id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
        {/* <Route path="menu" element={<WebsiteLayouts />}>
          <Route index element={<MenuPage />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route> */}
        {/* admin  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="form" element={<Form />} />
          {/* <Route path="chart" element={<Chart />} /> */}
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
