import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/type";
import { useParams } from "react-router-dom";
import { add } from "./cart/Cart.slice";
import { useAppDispatch } from "../../store/hook";

interface IProps {
  products: any;
}
const ProductDetail = (props: IProps) => {
  const dispatch = useAppDispatch();
  let { id } = useParams();
  // console.log(props.products);
  const currentProduct = props.products.find(
    (product: IProduct) => product._id === String(id)
  );
  const [quantity, setQuantity] = useState<number>(1); // Cung cấp kiểu dữ liệu

  const handleAddToCart = () => {
    dispatch(
      add({ ...currentProduct, quantity: parseInt(quantity.toString()) })
    );
  };

  return (
    <div>
      <div className="container-xxl py-5 bg-dark food-detail-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Menu
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="menu">Menu</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Product Name
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="menu-card">
            <div className="product-imgs">
              <img src={currentProduct?.imgUrl[0]} alt="shoe image" />
            </div>
            <div className="product-content">
              <h2 className="product-title">{currentProduct?.name}</h2>
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <span>
                  {" "}
                  <strong>5</strong> (21 đánh giá) | Đã đặt{" "}
                  <strong>2215</strong> lần
                </span>
              </div>

              <div className="product-price">
                <h1>{currentProduct?.price} đ</h1>
              </div>
              <div className="add-card">
                <button className="btn-order">Đặt món</button>
                <div className="purchase-info">
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleAddToCart()}
                  >
                    Add to Cart <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-detail">
                <div className="pro-desc">
                  <div className="pro-desc-tt">
                    <img
                      src="https://img.tastykitchen.vn/cates/2021/12/17/icon3-420b.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                    <p>Cách bảo quản :</p>
                  </div>
                  <div className="pro-desc-ct">
                    {currentProduct?.storageInstructions}
                  </div>
                </div>
                <div className="pro-desc border-dashed">
                  <div className="pro-desc-tt">
                    <img
                      src="https://static.tastykitchen.vn/images/icon-food/icon2.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                    <p>Khẩu phần:</p>
                  </div>
                  <div className="pro-desc-ct">1 người</div>
                </div>
                <div className="pro-desc border-dashed ">
                  <div className="pro-desc-tt">
                    <img
                      src="https://img.tastykitchen.vn/cates/2021/12/17/icon6-35fc.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                    <p>Năng lượng:</p>
                  </div>
                  <div className="pro-desc-ct">
                    Protein: 2.2, Carbs: 14.4, Fat: 12.2, Total Kcal: 157.8
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-desc border-dashed ">
            <div className="pro-desc-tt">
              <img
                src="https://img.tastykitchen.vn/cates/2021/12/17/icon1-e753.svg "
                alt=""
                width={22}
                height={22}
              />
              <p>Cách chế biến:</p>
            </div>
            <div className="pro-desc-ct">
              {currentProduct?.processingInstructions}
            </div>
          </div>
          <div className="pro-desc border-dashed ">
            <div className="pro-desc-tt">
              <img
                src="https://img.tastykitchen.vn/cates/2021/12/17/icon4-c817.svg"
                alt=""
                width={22}
                height={22}
              />
              <p>Mô tả món:</p>
            </div>
            <div className="pro-desc-ct">{currentProduct?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
