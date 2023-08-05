import { useState } from "react";
import LogoAdmin from "./LogoAdmin";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      console.log("1");
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <ul className={style}>
      <LogoAdmin />
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <NavLink className="nav-link" to="dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <NavLink
          to="products"
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-table"></i>
          <span>Products</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="categories"
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Categories</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="users"
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-user"></i>
          <span>Users</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={changeStyle}
        ></button>
      </div>
    </ul>
  );
};

export default SideBar;
