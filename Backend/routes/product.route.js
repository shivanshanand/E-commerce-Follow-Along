const express = require("express");
const {
  createProduct,
  updateProduct,
  getProduct,
  getAllProducts,
  deleteProduct,
} = require("../controller/product.controller");
const upload = require("../middleware/upload");

const router = express.Router();

// Create a new product (with image upload)
router.post("/create", upload.array("images", 5), createProduct);

// Update an existing product by ID
router.put("/:id", upload.array("images", 5), updateProduct);

router.delete("/:id", deleteProduct);

// Get a single product by ID
router.get("/:id", getProduct);
router.get("/", getAllProducts);

module.exports = router;
