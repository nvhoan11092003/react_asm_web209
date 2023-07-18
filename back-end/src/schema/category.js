
import joi from "joi";

const categorySchma = joi.object({
    name: joi.string().required().max(255).min(6).messages({
        "string.empty": "Danh mục không được để trống",
        "string.base": "Danh mục phải là chuỗi",
        "string.required": "Danh mục là bắt buộc",
        "string.min": "Tên danh mục tối thiểu {#limit} ký tự",
        "string.max": "Tên danh mục không được vượt quá {#limit} ký tự",
    }),
    productId: joi.array().items(joi.string())
})

export default categorySchma