const bcrypt = require("bcryptjs");
const User = require("../model/user.model.js");
const Product = require("../model/product.model.js");

// Create a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, images, ratings, discount } =
      req.body;

    // Check if required fields are provided
    if (!name || !description || !price || !category || !images || !ratings) {
      return res.status(400).json({
        message:
          "All fields (name, description, price, category, images, ratings) are required.",
      });
    }

    // Create a new product instance
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      images,
      ratings,
      discount,
    });

    // Save the product to the database
    await newProduct.save();

    // Send response back to the client
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({
        message: "All fields (name, description, price) are required.",
      });
    }

    const product = await Product.findByIdAndUpdate(
      { _id: id },
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      updated: true,
      product: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, updateProduct, createProduct };
