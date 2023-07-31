import { Children, useEffect, useState } from "react";
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
import { BrowserRouter, Form, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
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
      setProducts(products.filter((item: IProduct) => item._id !== id))
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
      setCategories(categories.filter((item: ICategory) => item._id !== id))
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

  const router = createBrowserRouter([
    {
      path: "/", element: <WebsiteLayouts />, children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "service", element: <ServicePage /> },
        {
          path: "menu", element: <MenuPage />, children: [
            { path: ":id", element: <ProductDetail products={products} /> }
          ]
        },
        { path: "contact", element: <ContactPage /> },
        { path: "booking", element: <BookingPage /> },
        { path: "team", element: <TeamPage /> },
      ]
    },
    {
      path: "admin", element: <AdminLayout />, children: [
        { path: "", element: <Navigate to="dashboard" /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "form", element: <Form /> },
        {
          path: "products", element: <MenuPage />, children: [
            {
              path: "", element: <ListProduct
                products={products}
                onRemove={onHandleRemoveProduct}
              />
            }, {
              path: "add", element: <AddProduct onAdd={onHandleAddProduct} />
            }, {
              path: ":id/update", element: <UpdateProduct
                onUpdate={onHandleUpdateProduct}
                products={products}
              />
            }
          ]
        },
        {
          path: "categories", element: <MenuPage />, children: [
            {
              path: "", element: <ListCategory
                categories={categories}
                onRemove={onHandleRemoveCategory}
              />
            }, {
              path: "add", element: <AddCategory onAdd={onHandleAddCategory} />
            }, {
              path: ":id/update", element: <UpdateCategory
                categories={categories}
                onUpdate={onHandleUpdateCategory}
              />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />

}

export default App;
