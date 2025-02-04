const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/upload", upload.array("myFiles"), (req, res) => {
  try {
    res.status(200).json({
      message: "Files uploaded successfully!",
      files: req.files.map((file) => ({
        filename: file.filename,
        path: file.path,
      })),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
