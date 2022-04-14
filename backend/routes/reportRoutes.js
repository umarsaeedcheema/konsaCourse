const express = require("express");
const router = express.Router();
const addReport = require("../controllers/reportControllers");

router.route("/addReport").post(addReport);
module.exports = router;
