import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Layouts/websiteLayouts";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const CheckoutPage = () => {
  const { user } = useContext(UserContext);

  const { items } = useAppSelector((state: any) => state.cart);

  if (!items[0]) {
    return <h1 className="mx-auto">Không có sản phẩm nào !</h1>;
  }

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">
              {items.reduce(function (sum: any, item: any) {
                return sum + item.quantity;
              }, 0)}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {items?.map((item: any) => (
              <li
                className="list-group-item d-flex justify-content-between lh-condensed"
                key={item._id}
              >
                <img style={{ width: "100px" }} src={item.imgUrl[0]} alt="" />
                <div style={{ marginLeft: "-100px" }}>
                  <h6 className="my-0 ">{item.name}</h6>
                  <small className="text-muted">{item.quantity}</small>
                </div>
                <span className="text-muted">
                  {item.price * item.quantity} đ
                </span>
              </li>
            ))}

            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total </span>
              <strong>
                {items.reduce(function (sum: any, item: any) {
                  return sum + item.price * item.quantity;
                }, 0)}{" "}
                đ
              </strong>
            </li>
          </ul>
        </div>
        <div className="col-md-6 mx-3 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate={false}>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
                <div className="invalid-feedback" style={{ width: "100%" }}>
                  {" "}
                  Your username is required.{" "}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                {" "}
                Please enter a valid email address for shipping updates.{" "}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
              />
              <div className="invalid-feedback">
                {" "}
                Please enter your shipping address.{" "}
              </div>
            </div>
            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
