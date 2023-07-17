
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebsiteLayouts from "./Layouts/websiteLayouts";
import HomePage from "./pages/clientPages/HomePage";
import AboutPage from "./pages/clientPages/AboutPage";
import ServicePage from "./pages/clientPages/ServicePage";
import MenuPage from "./pages/clientPages/MenuPage";
import ContactPage from "./pages/clientPages/ContactPage";
import BookingPage from "./pages/clientPages/BookingPage";
import TeamPage from "./pages/clientPages/TeamPage";

import AdminLayout from "./pages/layout/AdminLayout"
import DashBoard from "./pages/DashBoard"
import Form from "./pages/Form"
import Chart from "./pages/Chart"
import ProductManager from "./pages/ProductManager"


function App() {
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
  );
}

export default App;
