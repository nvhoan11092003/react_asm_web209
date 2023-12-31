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
import {
  Form,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
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
import { CartPage } from "./pages/clientPages/cart/CartPage";
// import { CartPage } from "./pages/clientPages/cart/CartPage";
import SignUpPage from "./pages/clientPages/SignUpPage";
import SignInPage from "./pages/clientPages/SignInPage";
import Profile from "./pages/clientPages/profile";
import CheckoutPage from "./pages/clientPages/Checkout";
import { getAllUser, deleteUser } from "./api/user";
import { IUser } from "./models/type";
import ListUser from "./pages/admin/users/list-user";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => {
      const newdata = data.sort()
      setProducts(newdata)
    });
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

  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getAllUser().then(({ data }) => setUsers(data));
  }, []);

  const onHandleRemoveUser = (id: string) => {
    deleteUser(id).then(() =>
      setUsers(users.filter((item: IUser) => item._id !== id))
    );
    alert("Xoá người dùng thành công");
  };

  // ADD TO CART
  // const createCart = (cart: ICart) => {
  //   addToCart(cart);
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayouts />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "service", element: <ServicePage /> },
        { path: "profile", element: <Profile /> },
        {
          path: "menu",
          children: [
            { path: "", element: <MenuPage /> },
            { path: ":id", element: <ProductDetail products={products} /> },
          ],
        },
        { path: "contact", element: <ContactPage /> },
        { path: "booking", element: <BookingPage /> },
        { path: "team", element: <TeamPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "Checkout", element: <CheckoutPage /> },
        // { path: "cart", element: <CartPage /> },
        { path: "signup", element: <SignUpPage /> },
        { path: "signin", element: <SignInPage /> },
      ],
    },
    {
      path: "admin/",
      element: <AdminLayout />,
      children: [
        { path: "", element: <Navigate to="dashboard" /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "form", element: <Form /> },
        {
          path: "products",
          children: [
            {
              path: "",
              element: (
                <ListProduct
                  products={products}
                  onRemove={onHandleRemoveProduct}
                />
              ),
            },
            {
              path: "add",
              element: <AddProduct onAdd={onHandleAddProduct} />,
            },
            {
              path: ":id/update",
              element: (
                <UpdateProduct
                  onUpdate={onHandleUpdateProduct}
                  products={products}
                />
              ),
            },
          ],
        },
        {
          path: "categories",
          children: [
            {
              path: "",
              element: (
                <ListCategory
                  categories={categories}
                  onRemove={onHandleRemoveCategory}
                />
              ),
            },
            {
              path: "add",
              element: <AddCategory onAdd={onHandleAddCategory} />,
            },
            {
              path: ":id/update",
              element: (
                <UpdateCategory
                  categories={categories}
                  onUpdate={onHandleUpdateCategory}
                />
              ),
            },
          ],
        },
        {
          path: "users",
          children: [
            {
              path: "",
              element: <ListUser users={users} onRemove={onHandleRemoveUser} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
