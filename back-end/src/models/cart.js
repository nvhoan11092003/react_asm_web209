import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    productId: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
      ],
    quantity: {
        type: Number,
        default: 1,
    }
})

export default mongoose.model("Cart",cartSchema)
