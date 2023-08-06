// controllers/order.js
import Order from "../models/orders";
import Cart from "../models/cart";

const getAllOrder = async (req,res) => {
  try {
    const order = await Order.findOne({ userId: req.user._id }).populate({
        path: "cartId.carts.items.productId",
        model: "Product",
    });
    // console.log(order.cartId);
 
  if(order.length === 0){
    return res.status(401).json({
      message: "Bạn không có đơn hàng nào"
    })
  }
  return res.status(200).json(order)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}



const createOrder = async (req, res) => {
  const userId = req.user._id;
  const { cartId, numberphone, address} = req.body;
  try {
    // Tìm giỏ hàng của người dùng dựa vào userId
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Không tìm thấy giỏ hàng của người dùng." });
    }
    // Tìm các giỏ hàng trong mảng carts có ID nằm trong cartId
    const selectedCarts = cart.carts.filter(cartItem => cartId.includes(cartItem._id.toString()));
    console.log(selectedCarts);
    if (selectedCarts.length !== cartId.length) {
      return res.status(400).json({ message: "Một hoặc nhiều cartId không tồn tại trong giỏ hàng." });
    }
    // Tạo đơn hàng mới
    const newOrder = new Order({
      userId,
      cartId: selectedCarts, // Liên kết đơn hàng với giỏ hàng
      numberphone,
      address
    });
    // Lưu đơn hàng vào cơ sở dữ liệu
    await newOrder.save();
    res.status(200).json({
      message: "Tạo đơn hàng thành công",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Đã xảy ra lỗi khi tạo đơn hàng.",
      error: error.message,
    });
  }
};



export { createOrder,getAllOrder };

