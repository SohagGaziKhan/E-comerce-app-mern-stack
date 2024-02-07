import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  regularPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "Category",
    required: true,
  },
  brand: {
    type: mongoose.ObjectId,
    ref: "BrandName",
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  shipping: {
    type: Boolean,
  },
});
const Product = mongoose.model("Product", productSchema);
export default Product;
