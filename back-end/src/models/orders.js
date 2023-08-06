// models/order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  cartId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Cart"
    }
  ],
  intoMoney: {
    type: Number,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  numberphone:{
    type : String
  },
  address: {
      name: {
        type: String
      },
      specificAddress: {
        type: String
      }
  }
}, { timestamps: true, versionKey: false });

export default mongoose.model("Order", orderSchema);
