import React from "react";
import SearchBar from "./SearchClient";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img src="/img/logo.png" alt="Logo" />
        </Link>

        <SearchBar />
        <div className=" show navbar-collapse z-2" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            {/* <Link to="/service" className="nav-item nav-link">
              Service
            </Link> */}
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
            <div className="nav-item dropdown">
              <Link to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/booking" className="dropdown-item">
                  Booking
                </Link>
                {/* <Link to="/team" className="dropdown-item">
                  Our Team
                </Link> */}
              </div>
            </div>
            {/* <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link> */}
          </div>
          <Link to="/signin" className="btn btn-primary py-2 px-4">
            Account
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
