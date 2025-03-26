const express = require("express");
const {
  getCartItems,
  addToCart,
  updateCartQuantity
} = require("../controller/cart.controller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/items", getCartItems);
router.put("/update", updateCartQuantity);
// router.delete("/remove/:userId/:productId", deletefromcart);

module.exports = router;
