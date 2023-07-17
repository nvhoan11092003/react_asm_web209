import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 6,
        maxLength: 255
    },
    price: {
        type: Number,
        require: true,
        min: 1
    },
    description: {
        type: String
    },
    imgUrl: [
        {
            type :String,
            require: true
        }
    ],
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
},{timestamps:true,versionKey:false})

productSchema.plugin(mongoosePaginate)

export default mongoose.model("Product", productSchema)




