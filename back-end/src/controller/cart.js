import Cart from "../models/cart";
import Product from "../models/products"

// GET /cart
const getCart = async (req, res) => {

  try {
    // Lấy giỏ hàng dựa trên userId
    const cart = await Cart.findOne({ userId: req.user._id }).populate({
      path: "carts.items.productId",
      model: "Product",
    });

    if (!cart) {
      return res.status(404).json({ message: "Bạn chưa có sản phẩm nào trong giỏ hàng" });
    }


    res.json(cart);
  } catch (error) {
    res.status(500).json({
       message: "Đã xảy ra lỗi khi lấy giỏ hàng.",
       error: error.message
    });
  }
};

// POST /cart
const addToCart = async (req, res) => {
  const { carts } = req.body;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, carts: [] });
    }

    for (const product of carts) {
      const productExists = cart.carts.some(item => item.items.productId.equals(product.items.productId));

      if (productExists) {
        return res.status(400).json({ message: "Sản phẩm đã tồn tại trong giỏ hàng." });
      }

      const productDocument = await Product.findById(product.items.productId);

      if (!productDocument) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm." });
      }

      // Thêm sản phẩm vào giỏ hàng
      cart.carts.push(product);
    }

    await cart.save();

    res.status(200).json({
      message: "Thêm sản phẩm vào giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng.",
      error: error.message,
    });
  }
};


const deleteCart = async (req, res) => {
  const userId = req.user._id;
  const itemIdToDelete = req.params.id; 

  try {
    // Tìm giỏ hàng của người dùng dựa vào userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Không tìm thấy giỏ hàng của người dùng." });
    }

    // Tìm sản phẩm cần xóa trong mảng products của giỏ hàng
    const itemIndexToDelete = cart.carts.findIndex(item => item._id.equals(itemIdToDelete));

    if (itemIndexToDelete === -1) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm trong giỏ hàng." });
    }

    // Xóa sản phẩm khỏi mảng products của giỏ hàng
    cart.carts.splice(itemIndexToDelete, 1);

    // Lưu giỏ hàng sau khi xóa
    await cart.save();

    res.status(200).json({ 
      message: "Xóa sản phẩm khỏi giỏ hàng thành công" ,
      cart
    });
  } catch (error) {
    res.status(500).json({
      message: "Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng.",
      error: error.message,
    });
  }
};




export { getCart, addToCart,deleteCart };
