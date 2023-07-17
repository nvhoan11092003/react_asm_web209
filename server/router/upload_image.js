import express from "express";
import upload from "../multer/multerConfig";
const router = express.Router();

// Middleware kiểm tra định dạng tệp ảnh


router.post("/upload", upload.fields([{ name: "img", maxCount: 5 }]), (req, res) => {
  if (req.files["img"]) {
    const images = req.files["img"];
    const imgUrls = [];

    // Kiểm tra kích thước và định dạng tệp ảnh
    for (let i = 0; i < images.length; i++) {
      if (images[i].size <= 2 * 1024 * 1024) {
        imgUrls.push(images[i].path);
      } else {
        return res.status(400).json({ error: "Kích thước tệp ảnh không được vượt quá 2MB" });
      }
    }

    res.send(imgUrls);
  } else {
    res.status(400).json({ error: "Không tìm thấy tệp ảnh" });
  }
});

export default router;
