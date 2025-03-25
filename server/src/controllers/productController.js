
import fs from "fs";
import Product from "../models/Product.js";
import cloudinary from "../utils/cloudinaryUpload.js";



export const addProduct = async (req, res, next) => {
  try {
    const { title, description, price, category, rating } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("hiiiiiii", title);

    let imageUrl = "";

    // Check if an image file is provided
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          public_id: `${title.replace(/\s+/g, "_").toLowerCase()}_profile`, // Fixed `name` issue
        });

        imageUrl = result.secure_url;

        // Delete the file from local storage after successful upload
        fs.unlinkSync(req.file.path);
      } catch (uploadError) {
        console.error("Cloudinary Upload Error:", uploadError);
        return res.status(500).json({ error: "Image upload failed" });
      }
    } else {
      return res.status(400).json({ error: "Image file is required" });
    }

    // Create and save new product
    const product = new Product({
      title,
      description,
      price,
      category,
      rating,
      imageUrl, // Ensure it's a valid URL
    });

    await product.save();

    res.status(201).json({
      status: "success",
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    console.error("Product Creation Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
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
