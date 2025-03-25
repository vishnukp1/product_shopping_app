import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  category: String,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;

