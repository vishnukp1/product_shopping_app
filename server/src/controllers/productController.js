import Product from "../models/Product.js";

export const addProduct = async (req, res, next) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json({
    status: "success",
    message: "Product added successfully",
    data: product,
  });
};
export const getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    message: "Products retrieved successfully",
    data: products,
  });
};

export const getProductById = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Product retrieved successfully",
    data: product,
  });
}; 



export const updateProduct = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    message: "Product updated successfully",
    data: product,
  });
};

export const deleteProduct = async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Product deleted successfully",
  });
};
