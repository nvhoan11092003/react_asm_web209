import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AdminLayout from "./pages/layout/AdminLayout"
import DashBoard from "./pages/DashBoard"
import Form from "./pages/Form"
import Chart from "./pages/Chart"
import ProductManager from "./pages/ProductManager"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/*   client */}
        <Route path="/"  element={<Home/>}>

        </Route>
        {/* admin  */}
        <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<DashBoard/>} />
            <Route path="form" element={<Form/>} />
            <Route path="chart" element={<Chart/>} />
            <Route path="products" >
                <Route index element={<ProductManager/>} />
                
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
