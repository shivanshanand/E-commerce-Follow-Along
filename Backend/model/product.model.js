const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      // required: true,
      default: () => uuidv4(),
      unique: [true, "Product with this id already exists"],
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Name must be at least 3 characters long."],
      maxlength: [20, "Name must not exceed 20 characters."],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [5, "Description must be at least 50 characters long."],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number."],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one image must be uploaded.",
      },
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
      min: [1, "Ratings must be at least 1."],
      max: [5, "Ratings cannot exceed 5."],
      set: (value) =>
        isNaN(value) || value === "" ? 1 : Math.round(value * 100) / 100, // Default to 1 if invalid
    },
    discount: {
      type: Number,
      min: [0, "Discount cannot be negative."],
      max: [100, "Discount cannot exceed 100%."],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
