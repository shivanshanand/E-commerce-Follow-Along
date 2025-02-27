const Cart = require("../model/cart.model");
const Product = require("../model/product.model");

// add product
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Fetch the user's cart (if it exists)
    let cart = await Cart.findOne({ userId });

    // If cart doesn't exist, create a new cart
    if (!cart) {
      cart = new Cart({ userId, items: [], totalAmount: 0 });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex > -1) {
      // If the item already exists, update the quantity and total price
      cart.items[existingItemIndex].quantity += quantity;
      cart.items[existingItemIndex].totalPrice =
        cart.items[existingItemIndex].quantity * product.price;
    } else {
      // If the item does not exist, add a new item to the cart
      cart.items.push({
        productId,
        name: product.name,
        price: product.price,
        quantity,
        totalPrice: product.price * quantity,
      });
    }

    if (quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than zero" });
    }

    cart.totalAmount = cart.items.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    await cart.save();

    // 7. Return the updated cart details as a response
    return res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error adding product to cart", error });
  }
};

const getcart = async (req, res) => {
  // const { userId } = req.query;

  // In your cart controller, before using the userId, ensure it's a valid ObjectId
  const userId = mongoose.Types.ObjectId(req.query.userId);

  // Check if it successfully converted, otherwise handle the error
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).send("Invalid userId format.");
  }

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Fetch the user's cart based on userId
    const cart = await Cart.findOne({ userId: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching cart", error });
  }
};

// increase quantity
const increaseqty = async (req, res) => {
  const { userId, productId } = req.body; // Destructure from request body

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (item) {
      item.quantity += 1; // Increase the quantity by 1
      item.totalPrice = item.quantity * item.productId.price; // Update the total price for this item
    }

    // Recalculate the total amount of the cart
    cart.totalAmount = cart.items.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    await cart.save(); // Save the updated cart

    return res.status(200).json({ cart }); // Send the updated cart as response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error increasing quantity" });
  }
};

// decrease quantity
const decreaseqty = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (item && item.quantity > 1) {
      item.quantity -= 1; // Decrease the quantity by 1
      item.totalPrice = item.quantity * item.productId.price; // Update the total price for this item

      // Recalculate the total amount of the cart
      cart.totalAmount = cart.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      await cart.save(); // Save the updated cart
      return res.status(200).json({ cart }); // Send the updated cart as response
    }

    return res.status(400).json({ message: "Quantity can't be less than 1" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error decreasing quantity" });
  }
};

// Remove item from cart
const deletefromcart = async (req, res) => {
  const { userId, productId } = req.query;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1); // Remove item from cart
      cart.totalAmount = cart.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      await cart.save();
      return res.status(200).json({ message: "Item removed from cart" });
    }

    return res.status(404).json({ message: "Product not found in cart" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error removing item from cart" });
  }
};

module.exports = {
  addToCart,
  getcart,
  decreaseqty,
  increaseqty,
  deletefromcart,
};
