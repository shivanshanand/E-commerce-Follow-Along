const Product = require("../model/product.model");
const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/products", upload.array("images"), async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      ratings,
      discount,
      inStock,
    } = req.body;

    if (req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image must be uploaded." });
    }

    const imagePaths = req.files.map((file) => file.path);

    const newProduct = new Product({
      id,
      name,
      description,
      price,
      category,
      ratings,
      discount,
      inStock,
      images: imagePaths,
    });

    await newProduct.save();

    console.log(req.body);
    res.status(201).json({ message: "Product created successfully!" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Error creating product." });
  }
});

module.exports = router;
