import Product from "../models/products";
import productSchema from "../schema/product";
import Category from "../models/categories";
import mongoose from "mongoose";
import cloudinary from "../configs/cloudinaryConfig";

//Tìm kiếm sản phẩm theo tên (cả chữ hoa và chữ thường)
export const searchProduct = async (req, res) => {
  const { keyword } = req.query;

  try {
    // Tạo một biểu thức chính quy không phân biệt chữ hoa chữ thường
    const searchRegex = new RegExp(keyword, "i");
    const products = await Product.find({ name: searchRegex });

    if (products.length === 0) {
      return res.status(401).json({
        message: "Không có sản phẩm nào phù hợp với từ khóa tìm kiếm",
      });
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//lọc sản phẩm theo giá từ 0 đến 5000
export const sortByPriceRange = async (req, res) => {
  const minPrice = 0;
  const maxPrice = 5000;

  try {
    const products = await Product.find({
      price: { $gte: minPrice, $lte: maxPrice },
    })
      .sort({ price: 1 })
      .exec();

    if (products.length === 0) {
      return res.status(401).json({
        message: "Không có sản phẩm nào trong khoảng giá từ 0 đến 5000",
      });
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// hiện thị tất cả sản phẩm
export const getAll = async (req, res) => {
  const {
    _sort = "createAt",
    _order = "asc",
    _limit = 10,
    _page = 1,
  } = req.query;
  const options = {
    sort: {
      [_sort]: _order === "desc" ? 1 : -1,
    },
    limit: _limit,
    page: _page,
  };

  try {
    const products = await Product.paginate({}, options);
    if (products.length === 0) {
      return res.status(401).json({
        message: "Không có dữ liệu sản phẩm",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// hiện thị 1 sản phẩm theo Id
export const getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (!product) {
      return res.status(401).json({
        message: "Không tìm thấy dữ liệu sản phẩm",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// thêm mới sản phẩm
export const createProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const product = await Product.create(req.body)

    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        productId: product._id,
      },
    });

    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//Xóa sản phẩm
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(401).json({
        message: "Không tìm thấy ID của category cần xóa",
      });
    }
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(401).json({
        message: "Sản phẩm vừa chọn không còn tồn tại",
      });
    }
    const category = await Category.updateMany(
      { productId: id },
      { $pull: { productId: id } }
    );

    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
      product,
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(401).json({
        message: "Không tìm thấy ID của sản phẩm cần cập nhật",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(401).json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }

    // Kiểm tra xem sản phẩm đã được cập nhật danh mục hay chưa
    if (
      req.body.categoryId &&
      req.body.categoryId !== updatedProduct.categoryId
    ) {
      await Category.updateMany(
        { productId: id },
        { $pull: { productId: id } }
      );
      const updatedCategory = await Category.findByIdAndUpdate(
        req.body.categoryId,
        { $addToSet: { productId: id } },
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(401).json({
          message: "Cập nhật danh mục không thành công",
        });
      }
    }
    // Category.updateMany() để loại bỏ id của sản phẩm khỏi danh mục hiện tại
    // Category.findByIdAndUpdate() để thêm id của sản phẩm vào danh mục mới.

    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
