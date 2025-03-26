const mongoose = require("mongoose");

// const CartItemSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//   },
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, default: 1 },
//   totalPrice: { type: Number, required: true },
// });

// const CartSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     items: [CartItemSchema],
//     totalAmount: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
