const router = require("express").Router();
const { signup, getbill } = require("../controller/app.controller.js");

router.post("/user/signup", signup);
router.post("/product/bill", getbill);

module.exports = router;
