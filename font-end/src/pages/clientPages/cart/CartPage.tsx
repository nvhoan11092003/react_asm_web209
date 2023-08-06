import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../../components/ProductCart";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import decode from "jwt-decode";
import { save } from "./Cart.slice";
import { ICart } from "../../../models/type";
import { getAllCart } from "../../../api/cart";
export const CartPage = () => {
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
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                      <form>
                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel1v"
                              value=""
                              aria-label="..."
                              defaultChecked
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>
                              Credit Card
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel2v"
                              value=""
                              aria-label="..."
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>
                              Debit Card
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel3v"
                              value=""
                              aria-label="..."
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>
                              PayPal
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-6">
                      <div className="row">
                        <div className="col-12 col-xl-6">
                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              size={17}
                              placeholder="John Smith"
                            />
                            <label className="form-label" htmlFor="typeName">
                              Name on card
                            </label>
                          </div>

                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YY"
                              size={7}
                              minLength={7}
                              maxLength={7}
                            />
                            <label className="form-label" htmlFor="typeExp">
                              Expiration
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6">
                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              size={17}
                              placeholder="1111 2222 3333 4444"
                              minLength={19}
                              maxLength={19}
                            />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"
                              size={1}
                              minLength={3}
                              maxLength={3}
                            />
                            <label className="form-label" htmlFor="typeText">
                              Cvv
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
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
                        className="btn btn-primary btn-block btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>Checkout</span>
                          <span>
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
