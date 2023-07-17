
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LinkClient from "../components/LinkClient";

const WebsiteLayouts = () => {
  const inlineStyle = {
    width: "3rem",
    height: "3rem",
  };
  return (
   <>
     <LinkClient/>
    <div className="container-xxl bg-white p-0">
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={inlineStyle}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
   </>
  );
};

export default WebsiteLayouts;
