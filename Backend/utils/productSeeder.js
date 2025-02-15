// const Product = require("../model/product.model");
// const { initialProducts } = require("./productDB");

// const seedInitialProducts = async () => {
//   try {
//     // Check if any products already exist in the database
//     const existingProducts = await Product.find();

//     if (existingProducts.length !== 0) {
//       // If no products exist, insert the initial products
//       await Product.insertMany(initialProducts);
//       console.log("Initial products seeded successfully!");
//     } else {
//       console.log("Products already exist in the database.");
//     }
//   } catch (error) {
//     console.error("Error seeding initial products:", error);
//   }
// };

// module.exports = seedInitialProducts;
