// controllers/order.js
import Order from "../models/orders";
import Cart from "../models/cart";
import Product from "../models/products"


const createOrder = async (req, res) => {
  const userId = req.user._id;
  const { cartId } = req.body;

  try {
    // Tìm giỏ hàng của người dùng dựa vào userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Không tìm thấy giỏ hàng của người dùng." });
    }

    // Tạo một mảng chứa các sản phẩm cần xóa sau khi tạo đơn hàng
    // const productsToDelete = [];

  // Tính tổng số tiền của đơn hàng chỉ tính cho các sản phẩm được chọn
  let totalAmount = 0;

  // Loop through each product in the cart and calculate the total amount for the selected products
  for (const cartItem of cart.carts) {
    if (cartId.includes(cartItem.products.productId.toString())) {
      const product = await Product.findById(cartItem.products.productId);
      if (product && product.originPrice && !isNaN(cartItem.products.quantity)) {
        totalAmount += cartItem.products.quantity * product.originPrice;
      } else {
        console.log("Invalid product or quantity data:", product, cartItem.products.quantity);
        return res.status(400).json({ message: "Invalid product or quantity data in the cart." });
      }
    }
  }

    // Tạo đơn hàng mới
    const newOrder = new Order({
      userId,
      cartId: cart._id, // Liên kết đơn hàng với giỏ hàng
      totalAmount,
    });

    // Lưu đơn hàng vào cơ sở dữ liệu
    await newOrder.save();

   // Xóa các sản phẩm trong cart dựa vào cartId và productId
   const productsToDelete = cart.carts.map((cartItem) => cartItem._id);
   await Cart.updateOne(
     { _id: cartId },
     { $pull: { "carts": { "products.productId": { $in: productsToDelete } } } }
   );

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



export { createOrder };

