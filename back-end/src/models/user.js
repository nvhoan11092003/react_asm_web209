import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
        minLength: 6
    },
    confirmPassword: {
        type: String,
        minLength: 6,
        require: true,
    },
    role: {
        type: String,
        default: "member",
      }
},{timestamps: true,versionKey: false})

export default mongoose.model("User",userSchema)