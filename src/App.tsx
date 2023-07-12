import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayouts from "./Layouts/websiteLayouts";
import HomePage from "./pages/clientPages/HomePage";
import AboutPage from "./pages/clientPages/AboutPage";
import ServicePage from "./pages/clientPages/ServicePage";
import MenuPage from "./pages/clientPages/MenuPage";
import ContactPage from "./pages/clientPages/ContactPage";
import BookingPage from "./pages/clientPages/BookingPage";
import TeamPage from "./pages/clientPages/TeamPage";

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
        <Route path=""></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
