import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/layout/AdminLayout";
import DashBoard from "./pages/DashBoard";
import Form from "./pages/Form";
import Chart from "./pages/Chart";
import HomePage from "./pages/clientPages/HomePage";
import ListProduct from "./pages/admin/products/list-product";
import AddProduct from "./pages/admin/products/add-product";
import { useEffect, useState } from "react";
import { IProduct,ICategory } from "./models/type";
import { addProduct, updateProduct, deleteProduct, getAllProduct} from "./api/product";
import UpdateProduct from "./pages/admin/products/update-product";
import {addCategory,updateCategory,deleteCategory,getAllCategory,} from "./api/category";
import ListCategory from "./pages/admin/categories/list-category";
import AddCategory from "./pages/admin/categories/add-category";
import UpdateCategory from "./pages/admin/categories/update-category";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, []);


  // const onHandleRemoveProduct = (id: number) => {
  //   deleteProduct(id).then(() =>
  //     setProducts(products.filter((item: IProduct) => item.id !== id))
  //   );
  // };

  const onHandleAddProduct = (product: IProduct) => {
    addProduct(product)
    console.log(product);
  };

  // const onHandleUpdateProduct = (product: IProduct) => {
  //   updateProduct(product).then(() =>
  //     getAllProduct().then(({ data }) => setProducts(data))
  //   );
  // };

  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, []);

  // const onHandleRemoveCategory = (id: number) => {
  //   deleteCategory(id).then(() =>
  //     setCategories(categories.filter((item: ICategory) => item.id !== id))
  //   );
  // };

  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category)
    // console.log(category);
    
  };

  // const onHandleUpdateCategory = (category: ICategory) => {
  //   updateCategory(category).then(() =>
  //     getAllCategory().then(({ data }) => setCategories(data))
  //   );
  // };

  return (
    <BrowserRouter>
      <Routes>
        {/*   client */}
        <Route index element={<HomePage />} />
        {/* admin  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="form" element={<Form />} />
          <Route path="chart" element={<Chart />} />
          <Route path="products">
            <Route
              index
              // element={
              //   <ListProduct
              //     products={products}
              //     onRemove={onHandleRemoveProduct}
              //   />
              // }
            />
            <Route
              path="add"
              element={<AddProduct onAdd={onHandleAddProduct}  category={categories}/>}
            />
            {/* <Route
              path=":id/update"
              element={
                <UpdateProduct
                  onUpdate={onHandleUpdateProduct}
                  products={products}
                />
              }
            /> */}
          </Route>
          <Route path="categories">
            <Route
              index
              // element={
              //   <ListCategory
              //     categories={categories}
              //     onRemove={onHandleRemoveCategory}
              //   />
              // }
            />
            <Route
              path="add"
              element={<AddCategory onAdd={onHandleAddCategory} />}
            />
            {/* <Route
              path=":id/update"
              element={
                <UpdateCategory
                  categories={categories}
                  onUpdate={onHandleUpdateCategory}
                />
              }
            /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;