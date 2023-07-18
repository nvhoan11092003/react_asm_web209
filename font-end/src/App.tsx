
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebsiteLayouts from "./Layouts/websiteLayouts";
import HomePage from "./pages/clientPages/HomePage";
import AboutPage from "./pages/clientPages/AboutPage";
import ServicePage from "./pages/clientPages/ServicePage";
import MenuPage from "./pages/clientPages/MenuPage";
import ContactPage from "./pages/clientPages/ContactPage";
import BookingPage from "./pages/clientPages/BookingPage";
import TeamPage from "./pages/clientPages/TeamPage";
import SignInPage from "./pages/clientPages/SignInPage";
import SignUpPage from "./pages/clientPages/SignUpPage";
import SearchBar from "./components/SearchClient";
import AdminLayout from "./Layouts/adminLayout";
import Dashboard from "./pages/adminPages/Dashboard";
import './Dashboard.css'
import ProductManager from "./pages/adminPages/ProductManager";



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
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/find" element={<SearchBar />} />
        </Route>
        {/* admin  */}
        <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<ProductManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
