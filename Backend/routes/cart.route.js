const express = require("express");
const {
  getCartItems,
  addToCart,
} = require("../controller/cart.controller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/items", getCartItems);
// router.put("/update", updateItemQuantity);
// router.delete("/remove/:userId/:productId", deletefromcart);

module.exports = router;
