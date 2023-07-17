import Category from "../models/categories"
import Product from "../models/products"
import categorySchma from "../schema/category"
import mongoose from "mongoose"


// Thêm danh mục
export const createCategory = async (req,res)=>{
    try {
        const {error} = categorySchma.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const categories = await Category.create(req.body)
        if(!categories){
            return res.status(401).json({
                message: "Thêm danh mục không thành công"
            })
        }
        return res.status(200).json({
            message: "Thêm danh mục thành công",
            categories
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


// hiện thị tất cả danh mục
export const getAll = async (req,res) => {
    try {
        const categories = await Category.find()
        if(!categories){
            return res.status(401).json({
                message: "Không có danh mục nào"
            })
        }
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


// Hiện thị 1 danh mục theo ID
export const getOne = async (req, res) => {
    try {
        const { id } = req.params;

        // Kiểm tra trong mongoose nếu id không phải là một ObjectId thì trả về message
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(401).json({
                message: "Id danh mục không hợp lệ"
            });
        }

        const category = await Category.findById(req.params.id).populate("productId");
        if(!category){
            return res.status(401).json({
                message: "Không có danh mục nào"
            })
        }
        const product = await Product.find({ categoryId: id });
        return res.status(200).json({ ...category.toObject(), product });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

// Xóa sản phẩm
export const deleteCategory = async (req,res) => {
    try {
        const {id} = req.params
        const categoryId = req.params.id

        // Kiểm tra trong mongoose nếu id không phải là một ObjectId thì trả về message
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({
                message: "Không tìm thấy ID của category cần xóa"
            })
        }

        // xóa danh mục 
        const category = await Category.findByIdAndDelete(req.params.id)
        if(!category){
            return res.status(401).json({
                message: "Danh mục cần xóa không tồn tại"
            })
        }

        // deleteMany() thực hiện xóa luôn tất sản phẩm thuộc danh mục vừa xóa
       const product  =  await Product.deleteMany({categoryId})
        return res.status(200).json({
            message: "Xóa danh mục và sản phẩm thuộc danh mục thành công",
            category,
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


// Cập nhật danh mục
export const updateCategory = async (req,res) =>{
    try {
        const {error} = categorySchma.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        const {id} = req.params

        // Kiểm tra trong mongoose nếu id không phải là một ObjectId thì trả về message
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({
                message: "Không tìm thấy ID danh mục cần update"
            })
        }
        
        const category = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!category){
            return res.status(401).json({
                message: "Cập nhật danh mục không thành công"
            })
        }
        return res.status(200).json({
            message: "Cập nhật danh mục thành công",
            category
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}