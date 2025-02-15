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
const port = 7000;

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/files", uploadRoutes);

// Start Server
const PORT = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
