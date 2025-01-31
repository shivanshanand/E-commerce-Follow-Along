import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: uuidv4(),
    name: "Smartphone X12",
    prevPrice: 799,
    currPrice: 699,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0Mf-I1HKvUfKOmQ_A3FI_6YbWLDVu1CsfA&s",
    ],
    description:
      "A feature-packed smartphone with a high-resolution display and long-lasting battery.",
    category: "Electronics",
    ratings: 4.5,
    discount: 10,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "Laptop Pro 15",
    prevPrice: 1399,
    currPrice: 1299,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eIy6oKwQ_jpvNr7jmyo0ZbUYEv_3v1EZJQ&s",
    ],
    description:
      "A high-performance laptop perfect for gaming and heavy workloads.",
    category: "Electronics",
    ratings: 4.7,
    discount: 5,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "Wireless Earbuds Z",
    prevPrice: 199,
    currPrice: 149,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnJQi7uqNTauyCG4h16NASRkMvcq7v4ROHA&s",
    ],
    description:
      "Experience crisp sound and a secure fit with these wireless earbuds.",
    category: "Accessories",
    ratings: 4.3,
    discount: 15,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: 'Smart TV 50"',
    prevPrice: 899,
    currPrice: 799,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_s3zzqY34zTBJeE1v4r-1SQhX8uMXD5mFw&s",
    ],
    description: "A 50-inch 4K smart TV with HDR support and a sleek design.",
    category: "Home Appliances",
    ratings: 4.6,
    discount: 10,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "Gaming Console 5",
    prevPrice: 599,
    currPrice: 499,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp1FmaMM6hRjNT5QLgJcUwPVeJzIJctLg7Q&s",
    ],
    description:
      "Next-gen gaming console with ultra-fast load times and exclusive games.",
    category: "Gaming",
    ratings: 4.8,
    discount: 20,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "Bluetooth Speaker Mini",
    prevPrice: 129,
    currPrice: 99,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhivcImoon9Uimi40v7EaguHw8CulI3C09g&s",
    ],
    description:
      "Portable Bluetooth speaker with excellent sound quality and waterproof design.",
    category: "Accessories",
    ratings: 4.4,
    discount: 25,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "4K Action Camera",
    prevPrice: 349,
    currPrice: 299,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QjjDiBlRoWtHFm0SD5YzVFBU38NpmdqpeQ&s",
    ],
    description:
      "Capture stunning 4K action shots with this durable and compact action camera.",
    category: "Electronics",
    ratings: 4.5,
    discount: 10,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "Smartwatch Elite",
    prevPrice: 249,
    currPrice: 199,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5Ryt_lgOFDX5g3zufHQaYX5gJNJuXxDulg&s",
    ],
    description:
      "A smartwatch with fitness tracking, heart rate monitor, and GPS functionality.",
    category: "Accessories",
    ratings: 4.3,
    discount: 15,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "Gaming Headset X",
    prevPrice: 129,
    currPrice: 89,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR5iFW-FzLNuBQuFx2mE-tspPMtIgePmn_Q&s",
    ],
    description:
      "Comfortable gaming headset with surround sound and noise cancellation.",
    category: "Gaming",
    ratings: 4.6,
    discount: 10,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: "External SSD 1TB",
    prevPrice: 199,
    currPrice: 149,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMwhoITT8ED4OXAH7yeRSQ2Ss9P8U1TxN_w&s",
    ],
    description: "Fast and reliable 1TB external SSD for storage and backups.",
    category: "Electronics",
    ratings: 4.7,
    discount: 25,
    inStock: true,
  },
];

export default products;
