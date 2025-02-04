const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import Routes
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const emailRoutes = require("./routes/email.route");
const uploadRoutes = require("./routes/upload.route");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/files", uploadRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the E-Commerce API 🚀</h1>");
});

// Start Server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
