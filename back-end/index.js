import express from "express";
import dotenv from "dotenv";
import productRouter from "./src/router/product.js";
import categoryRouter from "./src/router/category.js";
import userRouter from "./src/router/user.js";
import cartRouter from "./src/router/cart.js";
import orderRouter from "./src/router/orders.js";
import uploadRouter from "./src/router/upload_image.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", userRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);
app.use("/api", uploadRouter);

// connect mongoose db
mongoose.connect(
  "mongodb+srv://hoannvph28518:Hoan1109@database.jszf9cb.mongodb.net/foods"
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("on port : " + PORT);
});

export const viteNodeApp = app;
