import React from "react";
import SearchBar from "./SearchClient";
import { useAppSelector } from "../store/hook";

const Header = () => {
  const { items } = useAppSelector((state: any) => state.cart);
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <img src="/img/logo.png" alt="Logo" />
        </a>

        <SearchBar />
        <div className=" show navbar-collapse z-2" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            {/* <a href="/service" className="nav-item nav-link">
              Service
            </a> */}
            <a href="/menu" className="nav-item nav-link">
              Menu
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="/booking" className="dropdown-item">
                  Booking
                </a>
                {/* <a href="/team" className="dropdown-item">
                  Our Team
                </a> */}
              </div>
            </div>
            <div className="nav-item cart-icon">
              <a href="/cart" className="nav-link">
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                <span className="badge">
                  {items.reduce(function (sum: any, item: any) {
                    return sum + item.quantity;
                  }, 0)}
                </span>
              </a>
            </div>
          </div>
          <a href="/signin" className="btn btn-primary py-2 px-4">
            Account
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
