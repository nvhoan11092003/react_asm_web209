import {
  remove,
  decrease,
  increase,
} from "../pages/clientPages/cart/Cart.slice";
import { useAppDispatch, useAppSelector } from "../store/hook";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((state: any) => state.cart);
  console.log(useAppSelector((state: any) => state.cart));
  if (!items[0]) {
    return <h1 className="mx-auto">Không có sản phẩm nào trong giỏ hàng !</h1>;
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="h5">
              Shopping Bag
            </th>
            <th scope="col">Format</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item: any) => (
            <tr key={item._id}>
              <th scope="row">
                <div className="d-flex align-items-center">
                  <img
                    src={item.imgUrl[0]}
                    className="img-fluid rounded-3"
                    style={{ width: "120px" }}
                    alt="Book"
                  />
                  <div className="flex-column ms-4">
                    <p className="mb-2">{item.name}</p>
                  </div>
                </div>
              </th>
              <td className="align-middle">
                <p className="mb-0" style={{ fontWeight: "500" }}>
                  {item.price} đ
                </p>
              </td>
              <td className="align-middle">
                <div className="d-flex flex-row">
                  <button
                    className="btn btn-link px-2"
                    onClick={() => dispatch(decrease(item.id))}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value={item.quantity}
                    type="number"
                    className="form-control form-control-sm"
                    style={{ width: "50px" }}
                  />

                  <button
                    onClick={() => dispatch(increase(item.id))}
                    className="btn btn-link px-2"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </td>
              <td className="align-middle">
                <p className="mb-0" style={{ fontWeight: "500" }}>
                  {item.price * item.quantity} đ
                </p>
              </td>
              <td className="align-middle">
                <button
                  className="delete btn btn-danger"
                  onClick={() => dispatch(remove(item._id))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
