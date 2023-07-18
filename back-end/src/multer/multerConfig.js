import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinaryConfig";

// Cấu hình Multer storage cho Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images_food",
  },
  allowedFormats: ['jpg','png','jpeg'],
  transformation: [{width: 500,height: 500, crop: 'limit'}]
});

const upload = multer({ 
  storage : storage,
});

export default upload;
