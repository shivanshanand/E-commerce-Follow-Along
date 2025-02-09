const express = require("express");
const {
  registerUser,
  loginUser,
  updateProduct,
  createProduct,
} = require("../controller/user.controller.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);

module.exports = router;
