const Product = require("../model/product.model");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Check if required fields are provided
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image must be uploaded." });
    }

    const imagePaths = req.files
      ? req.files.map((file) => `http://localhost:7000/${file.path}`)
      : [];

    const newProduct = new Product({
      id: uuidv4(),
      name,
      description,
      price,
      category,
      images: imagePaths,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully!",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating product." });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID format." });
    }

    const { name, description, price, category } = req.body;
    // console.log(req.body);
    const imagePaths = req.files ? req.files.map((file) => file.path) : [];

    const updatedProductData = {};

    if (name) updatedProductData.name = name;
    if (description) updatedProductData.description = description;
    if (price) updatedProductData.price = price;
    if (category) updatedProductData.category = category;
    if (imagePaths.length > 0) updatedProductData.images = imagePaths;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedProductData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({
      message: "Product updated successfully!",
      product: updatedProduct, // Return the updated product
    });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).json({ message: "Error updating product." });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID format." });
    }

    const deleteitem = await Product.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: `${deleteitem.name} deleted successfully`,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID format." });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product." });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products." });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getProduct,
  getAllProducts,
  deleteProduct,
};
