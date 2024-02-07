import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import offersRoutes from "./routes/OfferRoutes.js";
import orderRouter from "./routes/OrderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
const url = process.env.MONGO_URL;

// all middleware is here
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// mongodb connection here
mongoose
  .connect(url)
  .then(console.log("DataBase connection successfully.."))
  .catch((err) => console.log(err));

// all routes is here
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/brand", brandRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/offers/product", offersRoutes);
app.use("/api/v1/admin", userRoutes);

// test api
app.get("/", (req, res) => {
  res.send("this is testing api ");
});

// server listen on port 3030
app.listen(port, () => {
  console.log(`server on running on port ${port}`);
});
