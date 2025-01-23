const express = require("express");
const mongoose = require("mongoose");
const { userModel } = require("./model/user.model");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcryptjs");

let app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection function
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://shivanshanand962:RKnfXiWfz2rgkOPz@cluster0.ibiuh.mongodb.net/Ecomm-Follow-DB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectDB();

app.get("/home", (req, res) => {
  res.send("<h1>Hello, welcome to the Home route!</h1>");
});

app.listen(7000, () => {
  console.log("Server running on port 7000");
});

// Create a user
app.post("/create", async (req, res) => {
  let { name, email, password } = req.body;

  try {
    const hashedpass = await bcrypt.hash(password, 10);
    const userDetails = { name, password: hashedpass, email };

    const newuser = new userModel(userDetails);
    await newuser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newuser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user", error });
  }
});

//login  user
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ name: username });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const matchpass = await bcrypt.compare(password, user.password);

  if (matchpass) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

const storedFile = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadFolder = "uploads/";
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder);
    }
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storedFile,
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only images allowed!!"));
    }
  },
});

app.post("/upload", upload.array("myFiles"), (req, res) => {
  try {
    // console.log(req.files);
    res.status(200).send({
      message: "Files uploaded successfully!",
      files: req.files.map((file) => ({
        filename: file.filename,
        path: file.path,
      })),
    });
    res.send({ message: "file uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// Start the server
// app.listen(7000, () => {
//   console.log("Server running on port 7000");
// });
