import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import FooterAdmin from "../components/FooterAdmin";
import BtnToTop from "../components/BtnToTop";
import ModalLogout from "../components/modalLogout";

const AdminLayout = () => {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
          <BtnToTop />
          <ModalLogout />

          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
