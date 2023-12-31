
import SearchBar from "./SearchClient";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { ICart } from "../models/type";
import { save } from "../pages/clientPages/cart/Cart.slice";
import { UserContext } from "../Layouts/websiteLayouts";
"../App"
const Header = () => {

  const { items } = useAppSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();

  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userstring = localStorage.getItem("user");
      const user = JSON.parse(userstring ? userstring : "");
      setUser(user);
    }
  }, []);
  console.log("user", user);
  const loguot = () => {
    const products = items?.map((item: any) => {
      const { _id, quantity } = item;
      return { productId: _id, quantity };
    });
    const cart: ICart = {
      userId: user._id,
      carts: products,
    };
    dispatch(save(cart));
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setUser({});
    return "";
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img src="/assets/img/logo.png" alt="Logo" />
        </Link>

        <SearchBar />
        <div className=" show navbar-collapse z-2" id="navbarCollapse">
          <Link className=" bg-blue-500 text-white p-1 rounded-lg xl:ml-24" to="/admin/dashboard">admin Page</Link>
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
              <Link
                to="#"
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
            <div className="nav-item cart-icon">
              <Link to="/cart" className="nav-link">
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                <span className="badge">
                  {items?.reduce(function (sum: any, item: any) {
                    return sum + item.quantity;
                  }, 0)}
                </span>
              </Link>
            </div>
          </div>

          {!user._id ? (
            <Link to="/signin" className=" btn btn-primary py-2 px-4">
              Account
            </Link>
          ) : (
            <div className="btn-group">
              <button
                className="btn btn-primary py-2 px-4 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cá Nhân
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="profile">
                    Thông Tin
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Lịch Sử mua hàng
                  </Link>
                </li>
                <li>
                  <button onClick={loguot} className="dropdown-item">
                    Đăng Xuất
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
