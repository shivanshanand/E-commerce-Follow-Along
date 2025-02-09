// const Product = require("./model/product.model.js");

// const initialProducts = [
//   {
//     // id: "1",
//     name: "Smartphone X12",
//     // prevPrice: 799,
//     price: 699,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0Mf-I1HKvUfKOmQ_A3FI_6YbWLDVu1CsfA&s",
//     ],
//     description:
//       "A feature-packed smartphone with a high-resolution display and long-lasting battery.",
//     category: "Electronics",
//     // discount: 10,
//   },
//   {
//     // id: "2",
//     name: "Laptop Pro 15",
//     // prevPrice: 1399,
//     price: 1299,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eIy6oKwQ_jpvNr7jmyo0ZbUYEv_3v1EZJQ&s",
//     ],
//     description:
//       "A high-performance laptop perfect for gaming and heavy workloads.",
//     category: "Electronics",
//     // discount: 5,
//   },
//   {
//     // id: "3",
//     name: "Wireless Earbuds Z",
//     // prevPrice: 199,
//     price: 149,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnJQi7uqNTauyCG4h16NASRkMvcq7v4ROHA&s",
//     ],
//     description:
//       "Experience crisp sound and a secure fit with these wireless earbuds.",
//     category: "Accessories",
//     // discount: 15,
//   },
//   {
//     // id: "4",
//     name: 'Smart TV 50"',
//     // prevPrice: 899,
//     price: 799,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_s3zzqY34zTBJeE1v4r-1SQhX8uMXD5mFw&s",
//     ],
//     description: "A 50-inch 4K smart TV with HDR support and a sleek design.",
//     category: "Home Appliances",
//     // discount: 10,
//   },
//   {
//     // id: "5",
//     name: "Gaming Console 5",
//     // prevPrice: 599,
//     price: 499,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp1FmaMM6hRjNT5QLgJcUwPVeJzIJctLg7Q&s",
//     ],
//     description:
//       "Next-gen gaming console with ultra-fast load times and exclusive games.",
//     category: "Gaming",
//     // discount: 20,
//   },
//   {
//     // id: "6",
//     name: "Bluetooth Speaker Mini",
//     // prevPrice: 129,
//     price: 99,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhivcImoon9Uimi40v7EaguHw8CulI3C09g&s",
//     ],
//     description:
//       "Portable Bluetooth speaker with excellent sound quality and waterproof design.",
//     category: "Accessories",
//     // discount: 25,
//   },
//   {
//     // id: "7",
//     name: "4K Action Camera",
//     // prevPrice: 349,
//     price: 299,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QjjDiBlRoWtHFm0SD5YzVFBU38NpmdqpeQ&s",
//     ],
//     description:
//       "Capture stunning 4K action shots with this durable and compact action camera.",
//     category: "Electronics",
//     // discount: 10,
//   },
//   {
//     // id: "8",
//     name: "Smartwatch Elite",
//     // prevPrice: 249,
//     price: 199,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5Ryt_lgOFDX5g3zufHQaYX5gJNJuXxDulg&s",
//     ],
//     description:
//       "A smartwatch with fitness tracking, heart rate monitor, and GPS functionality.",
//     category: "Accessories",
//     // discount: 15,
//   },
//   {
//     // id: "9",
//     name: "Gaming Headset X",
//     // prevPrice: 129,
//     price: 89,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR5iFW-FzLNuBQuFx2mE-tspPMtIgePmn_Q&s",
//     ],
//     description:
//       "Comfortable gaming headset with surround sound and noise cancellation.",
//     category: "Gaming",
//     // discount: 10,
//   },
//   {
//     // id: "10",
//     name: "External SSD 1TB",
//     // prevPrice: 199,
//     price: 149,  // Renamed from currPrice to price
//     image: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMwhoITT8ED4OXAH7yeRSQ2Ss9P8U1TxN_w&s",
//     ],
//     description: "Fast and reliable 1TB external SSD for storage and backups.",
//     category: "Electronics",
//     // discount: 25,
//   },
// ];

// async function seedDatabase() {
//   try {
//     const existingProducts = await Product.countDocuments();
//     if (existingProducts > 0) {
//       console.log("Database already seeded.");
//       return;
//     }

//     await Product.insertMany(initialProducts);
//     // console.log("Database seeded with initial products");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   }
// }

// seedDatabase();
