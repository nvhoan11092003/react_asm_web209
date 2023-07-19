import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/type";
import { useParams } from "react-router-dom";

interface IProps {
  products: IProduct[];
}
const ProductDetail = (props: IProps) => {
  let { id } = useParams();
  // console.log(props.products);
  const currentProduct = props.products.find(
    (product) => product._id === String(id)
  );

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
              </div>
              <div className="product-detail">
                <div className="pro-desc">
                  <div className="pro-desc-tt">
                    <img
                      src="https://img.tastykitchen.vn/cates/2021/12/17/icon1-e753.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                    <p>Thành phần:</p>
                  </div>
                  <div className="pro-desc-ct">
                    {currentProduct?.description}
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
                src="https://img.tastykitchen.vn/cates/2021/12/17/icon3-420b.svg"
                alt=""
                width={22}
                height={22}
              />
              <p>Thời gian hoàn tất:</p>
            </div>
            <div className="pro-desc-ct">15 phút</div>
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
            <div className="pro-desc-ct">
              Salad rau mùa sốt mác mác được lựa chọn từ những loại rau củ ẩm
              thực phương Tây như xà lách lolo, xà lách carron, dầu oliu, kết
              hợp với hương đồng cỏ nội trong văn hoá ẩm thực Việt Nam là củ
              dền, táo đỏ, táo xanh, chanh dây và rau quế. Tất cả được hòa quyện
              dưới lớp sốt mác mác rau mùi được cấu thành bởi 3 thành phần chính
              là chanh dây, rau mùi và mayonaise, đem đến hương vị độc đáo, giàu
              vitamin C và chất xơ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
