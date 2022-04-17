const express = require("express");
const router = express.Router();
const {viewReports, removeRating, restoreRating} = require("../controllers/adminControllers")

router.route("/reports").get(viewReports)