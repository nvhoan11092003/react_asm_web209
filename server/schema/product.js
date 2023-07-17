import joi from "joi"
const productSchema = joi.object({
    name: joi.string().min(6).max(255).required().messages({
        "string.base" : "Tên sản phẩm phải là chuỗi",
        "string.empty" : "Tên sản phẩm không để trống",
        "string.min" : "Tên sản phẩm tối thiểu {#limit} ký tự",
        "string.max" : "Tên sản phẩm không được vượt quá {#limit} ký tự",
        "any.required" : "Tên sản phẩm là bắt buộc"
    }),
    price: joi.number().min(1).required().messages({
        "number.empty" : "Giá sản phẩm không để trống",
        "any.required" : "Giá sản phẩm là bắt buộc",
        "number.min" : "Giá sản phẩm phải lớn hơn 0 và không âm"
    }),
    description: joi.string(),
    imgUrl: joi.array().items(joi.string()).required().messages({
        "any.required": "Trường imgUrl là bắt buộc.",
        "array.base": "Trường imgUrl phải là một mảng.",
        "string.base": "Giá trị trong mảng imgUrl phải là chuỗi."
    }),
    categoryId: joi.string().required().messages({
        "any.required" : "CategoryId là bắt buộc"
    })
})

export default productSchema