import Order from "../models/orders";

export const createOrder = async (req, res) => {
  const { cartId, products, totalAmount } = req.body;
  const userId = req.user._id;

  try {
    const order = new Order({
      userId,
      cartId,
      products,
      totalAmount,
    });

    await order.save();

    res.status(200).json({
      message: "Đơn hàng đã được tạo thành công",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Đã xảy ra lỗi khi tạo đơn hàng",
      error: error.message,
    });
  }
};
