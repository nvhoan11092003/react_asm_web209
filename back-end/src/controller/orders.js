// controllers/order.js
import Order from "../models/orders.js";
import Cart from "../models/cart.js";

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate({ path: "cartId", populate: "carts.productId" });
    if (orders.length === 0) {
      return res.status(401).json({
        message: "không có đơn hàng nào",
      });
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const getOrderbyid = async (req, res) => {
  try {
    const _id = req.params.id;
    const orders = await Order.findById(_id)
      .populate("userId")
      .populate({ path: "cartId", populate: "carts.productId" });
    if (orders.length === 0) {
      return res.status(401).json({
        message: "không có đơn hàng nào",
      });
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getOrderbyiduser = async (req, res) => {
  try {
    const userId = req.params.id;
    const orders = await Order.find({ userId })
      .populate("userId")
      .populate({ path: "cartId", populate: "carts.productId" });
    if (orders.length === 0) {
      return res.status(401).json({
        message: "Bạn không có đơn hàng nào",
      });
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createOrder = async (req, res) => {
  const userId = req.user._id;
  const { cartId, numberphone, address } = req.body;

  try {
    // Tìm giỏ hàng của người dùng dựa vào userId
    const carts = await Cart.find({ _id: { $in: cartId } }).populate(
      "carts.productId"
    );

    // Tìm các giỏ hàng trong mảng carts có ID nằm trong cartId
    // const selectedCarts = cart.carts.filter(cartItem => cartId.includes(cartItem._id.toString()));
    // console.log(selectedCarts);
    // if (selectedCarts.length !== cartId.length) {
    //   return res.status(400).json({ message: "Một hoặc nhiều cartId không tồn tại trong giỏ hàng." });
    // }
    // Tạo đơn hàng mới
    const newOrder = new Order({
      userId,
      cartId, // Liên kết đơn hàng với giỏ hàng
      numberphone,
      address,
    });

    // // Lưu đơn hàng vào cơ sở dữ liệu
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

const deleteOrder = async (req, res) => {
  const orderId = req.params.id; // Assuming orderId is extracted from the URL

  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Không tìm thấy đơn hàng cần xóa",
      });
    }

    return res.status(200).json({
      message: "Xóa đơn hàng thành công",
      deletedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateOrder = async (req, res) => {
  const orderId = req.params.id; // Assuming orderId is extracted from the URL
  const { status, numberphone, address } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      {
        $set: {
          status,
          numberphone,
          address,
        },
      },
      { new: true } // To get the updated order as the response
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Không tìm thấy đơn hàng cần cập nhật",
      });
    }

    return res.status(200).json({
      message: "Cập nhật đơn hàng thành công",
      updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export {
  createOrder,
  getAllOrder,
  deleteOrder,
  updateOrder,
  getOrderbyiduser,
  getOrderbyid,
};
