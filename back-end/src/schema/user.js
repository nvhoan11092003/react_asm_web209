import joi from "joi";
export const signupSchema = joi.object({
    username: joi.string().required().min(3).messages({
        "string.base" : "User name phải là chuỗi",
        "string.min" : "User name tối thiếu {#limit} ký tự",
        "any.required": "Trường user name là bắt buộc",
        "string.empty": "User name không được để trống"
    }),
    email: joi.string().email().required().messages({
        "string.email":"Email không hợp lệ!",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc"
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Trường password là bắt buộc",
        "string.min": "Password tối thiểu {#limit} ký tự"
    }),
    confirmPassword: joi.string().required().min(6).valid(joi.ref("password")).messages({
        "string.min" : "ConfirmPassword tối thiểu {#limit} ký tự",
        "string.empty": "ConfirmPassword không được để trống",
        "any.only": "Password không khớp nhau",
        "any.required": "Trường confirmPassword là bắt buộc"
    })
})

export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email":"Email không hợp lệ!",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc"
    }),
    password: joi.string().required().min(3).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Trường password là bắt buộc",
        "string.min": "Password tối thiểu {#limit} ký tự"
    }),
})

export const forgotPasswordSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email":"Email không hợp lệ!",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc"
    })
})

export const changePasswordSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email":"Email không hợp lệ!",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc"
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Trường password là bắt buộc",
        "string.min": "Password tối thiểu {#limit} ký tự"
    }),
    newPassword: joi.string().required().min(6).messages({
        "string.empty": " New password không được để trống",
        "any.required": "Trường new password là bắt buộc",
        "string.min": "New password tối thiểu {#limit} ký tự"
    })
})


