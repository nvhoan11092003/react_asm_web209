import Cart from "../models/cart";
import Product from "../models/products"

// GET /cart
const getCart = async (req, res) => {

  try {
    // Lấy giỏ hàng dựa trên userId
    const cart = await Cart.findOne({ userId: req.user._id }).populate("productId");

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
  const { productId } = req.body;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const productExists = await Cart.findOne({ userId: req.user._id, productId: { $in: productId } });
    if (productExists) {
      return res
        .status(400)
        .json({ message: "Sản phẩm đã tồn tại trong giỏ hàng." });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm." });
    }

   // Thêm sản phẩm vào giỏ hàng
   cart.productId.push(...productId);
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


export { getCart, addToCart };
