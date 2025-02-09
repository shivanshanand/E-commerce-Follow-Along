const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Name must be at least 3 characters long."],
      maxlength: [50, "Name must not exceed 50 characters."],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Description must be at least 5 characters long."],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Current price must be a positive number."],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Electronics",
        "Accessories",
        "Gaming",
        "Home Appliances",
        "Fashion",
      ],
    },
    images: {
      type: [String],
      required: [true, "At least one image must be uploaded."],
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one image must be uploaded.",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
