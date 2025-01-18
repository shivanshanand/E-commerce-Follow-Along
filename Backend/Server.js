const express = require("express");
const mongoose = require("mongoose");
const { userModel } = require("./model/user.model");
const multer = require("multer");

// Initialize express
let app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://shivanshanand962:RKnfXiWfz2rgkOPz@cluster0.ibiuh.mongodb.net/Ecomm-Follow-DB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

connectDB();

app.get("/home", (req, res) => {
  res.send("<h1>Hello, welcome to the Home route!</h1>");
});

// Create a user
app.post("/create", async (req, res) => {
  let payload = req.body;

  try {
    let newuser = new userModel(payload);
    await newuser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newuser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user", error });
  }
});

// const passmongoatlas = "RKnfXiWfz2rgkOPz";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    console.log(req.file);
    res.send({ message: "file uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.send({ error: "error" });
  }
});

// Start the server
app.listen(7000, () => {
  console.log("Server running on port 7000");
});
