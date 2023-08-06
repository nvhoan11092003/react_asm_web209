import { NavLink } from "react-router-dom";

const MenuAdmin = () => {
  return (
    <>
      <li className="nav-item nav-category">
        <span className="nav-link">Navigation</span>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="dashboard">
          <span className="menu-icon">
            <i className="mdi mdi-speedometer"></i>
          </span>
          <span className="menu-title">Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="form">
          <span className="menu-icon">
            <i className="mdi mdi-playlist-play"></i>
          </span>
          <span className="menu-title">Form Elements</span>
        </NavLink>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="products">
          <span className="menu-icon">
            <i className="mdi mdi-table-large"></i>
          </span>
          <span className="menu-title">Products</span>
        </NavLink>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="categories">
          <span className="menu-icon">
            <i className="mdi mdi-table-large"></i>
          </span>
          <span className="menu-title">Categories</span>
        </NavLink>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="users">
          <span className="menu-icon">
            <i className="mdi mdi-table-large"></i>
          </span>
          <span className="menu-title">Users</span>
        </NavLink>
      </li>
      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="chart">
          <span className="menu-icon">
            <i className="mdi mdi-chart-bar"></i>
          </span>
          <span className="menu-title">Charts</span>
        </NavLink>
      </li>
    </>
  );
};

export default MenuAdmin;
