import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayouts from "./Layouts/websiteLayouts";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*   client */}
        <Route path="/" element={<WebsiteLayouts />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* admin  */}
        <Route path=""></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
