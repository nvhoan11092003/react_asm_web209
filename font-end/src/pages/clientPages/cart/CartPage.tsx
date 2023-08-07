import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../../components/ProductCart";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import decode from "jwt-decode";
import { save } from "./Cart.slice";
import { ICart } from "../../../models/type";
import { getAllCart } from "../../../api/cart";
import { persistStore } from "redux-persist";
import store from "../../../store";
// import storage from "redux-persist/lib/storage";
export const CartPage = () => {
  // const persistor = persistStore(store);
  const [carts, setCart] = useState<ICart[]>([]);
  useEffect(() => {
    getAllCart()
      .then(({ data }) => {
        setCart(data?.carts);
        localStorage.setItem("cart", JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  type tokenUser = {
    _id: string;
    iat: number;
    exp: number;
  };
  const { items } = useAppSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const saveCart = () => {
    const userLogin = localStorage.getItem("user");
    console.log(userLogin);

    if (userLogin) {
      const userJSON = JSON.parse(localStorage.getItem("user") ?? "");
      const accessToken = userJSON.accessToken;
      const idUser: tokenUser = decode(accessToken);
      if (items) {
        const products = items.map((item: any) => {
          const { _id, quantity } = item;
          return { productId: _id, quantity };
        });
        const cart: ICart = {
          userId: idUser._id,
          carts: products,
        };
        dispatch(save(cart));
        navigate("/checkout");
      } else {
        console.log(!items);

        alert("không có sản phẩm nào trong giỏ hàng");
      }
    } else {
      alert("Bạn chưa đăng nhập");
      navigate("/signin");
    }
  };
  return (
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Shopping Cart
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Pages</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Menu
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="h-100 h-custom pt-5 mb-5">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <Cart />
              <div
                className=" shadow-2-strong mb-5 mb-lg-0"
                style={{ borderRadius: "16px" }}
              >
                <div className="card-body p-4">
                  <div className="row">
                    <div className="">
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">
                          {items.reduce(function (sum: any, item: any) {
                            return sum + item.price * item.quantity;
                          }, 0)}{" "}
                          đ
                        </p>
                      </div>

                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">20.000 đ</p>
                      </div>

                      <hr className="my-4" />

                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-2">Total (tax included)</p>
                        <p className="mb-2">
                          {" "}
                          {items.reduce(function (sum: any, item: any) {
                            return sum + item.price * item.quantity + 20000;
                          }, 0)}{" "}
                          đ
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => saveCart()}
                        className="btn btn-primary btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>Checkout</span>
                          <span>
                            {" "}
                            {items.reduce(function (sum: any, item: any) {
                              return sum + item.price * item.quantity + 20000;
                            }, 0)}{" "}
                            đ
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
