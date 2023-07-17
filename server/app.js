import express from "express";

import productRouter from "./router/product"
import categoryRouter from "./router/category"
import userRouter from "./router/user"
import cartRouter from "./router/cart"
import orderRouter from "./router/orders"
// import uploadRouter from "./router/upload_images"
import mongoose from "mongoose"



const app = express()
app.use(express.json());
app.use("/api",productRouter)
app.use("/api",categoryRouter)
app.use("/api",userRouter)
app.use("/api",cartRouter)
app.use("/api", orderRouter)

// app.use("/api",uploadRouter)


// connect mongoose db
// mongoose.connect("mongodb+srv://food:food@food.lvqvdxq.mongodb.net/?retryWrites=true&w=majority")
// export const viteNodeApp = app


app.listen(8080, () => {
    console.log("Server is running on port " + 8080);
    console.log("db connected");
  })