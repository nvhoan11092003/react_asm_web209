import cloudinary from "../configs/cloudinaryConfig.js";

// Hàm controller để hiển thị tất cả hình ảnh đã upload lên
export const getAllImages = async (req, res) => {
  try {
    // Truy vấn tất cả hình ảnh từ dịch vụ lưu trữ (Cloudinary)
    const result = await cloudinary.api.resources({
      type: "upload", // Lấy các hình ảnh loại 'upload'
      max_results: 10, // Số lượng hình ảnh hiển thị tối đa (tuỳ chọn)
      // Các tùy chọn truy vấn khác nếu cần
    });

    // Duyệt qua các hình ảnh và lấy thông tin cần thiết
    const images = result.resources.map((image) => {
      return {
        publicId: image.public_id,
        url: image.secure_url,
      };
    });

    // Trả về danh sách các hình ảnh
    return res.status(200).json(images);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error retrieving images" });
  }
};

export const updateImage = async (req, res) => {
  const publicId = req.params.publicId;
  const newImagePath = req.files[0].path; // Đường dẫn tới hình ảnh mới
  try {
    // Upload ảnh mới lên Cloudinary và xóa ảnh cũ cùng lúc
    const [uploadResult, deleteResult] = await Promise.all([
      cloudinary.uploader.upload(newImagePath),
      cloudinary.uploader.destroy(publicId),
    ]);
    // Trả về kết quả với url và publicId của ảnh mới
    return res.json({
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: error.message || "Error updating image" });
  }
};

export const deleteImage = async (req, res) => {
  const publicId = req.params.publicId;
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return res.status(200).json({ message: "Xóa ảnh thành công", result });
  } catch (error) {
    res.status(500).json({ error: error.message || "Error deleting image" });
  }
};
