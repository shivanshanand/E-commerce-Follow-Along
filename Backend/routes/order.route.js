const express = require("express");
const router = express.Router();
const {
  getorders,
  createorder,
  getbyId,
  updateorder,
  deleteorder,
} = require("../controller/order.controller");

router.get("/", getorders);
router.post("/create", createorder);

router.get("/:id", getbyId);

router.patch("/update/:id", updateorder);

router.delete("/delete/:id", deleteorder);

module.exports = router;
