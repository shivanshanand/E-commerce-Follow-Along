const express = require("express");
const {
  addToCart,
  decreaseqty,
  increaseqty,
  deletefromcart,
  getcart,
} = require("../controller/cart.controller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/", getcart);
router.post("/decrease-quantity", decreaseqty);
router.post("/increase-quantity", increaseqty);
router.delete("/:productId", deletefromcart);

module.exports = router;
