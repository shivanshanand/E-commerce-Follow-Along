const Cart = require("../model/cart.model");
const User = require("../model/user.model");
const Product = require("../model/product.model");

const addToCart = async (req, res) => {
  try {
    const { email, productId, quantity } = req.body;

    if (!email || !productId || !quantity) {
      return res
        .status(400)
        .json({ message: "Email, productId, and quantity are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user already has a cart
    let cart = await Cart.findOne({ userId: user._id });

    if (!cart) {
      // Create a new cart if not exists
      cart = new Cart({
        userId: user._id,
        items: [{ productId, quantity }],
      });
    } else {
      // Check if product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity
      } else {
        cart.items.push({ productId, quantity }); // Add new item
      }
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cart = await Cart.findOne({ userId: user._id })
      .populate("items.productId", "name price images")
      .exec();

    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: "Your cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { getCartItems, addToCart };
