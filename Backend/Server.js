const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const connectDB = require("./config/db");

// Import Routes
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const emailRoutes = require("./routes/email.route");
const uploadRoutes = require("./routes/upload.route");
const cartRoutes = require("./routes/cart.route");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/files", uploadRoutes);

app.use("/api/cart",cartRoutes)

// Start Server
const PORT = process.env.PORT || 7100;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
