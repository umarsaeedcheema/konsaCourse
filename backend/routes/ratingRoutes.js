const express = require("express");
const router = express.Router();
const addRating = require("../controllers/ratingControllers");

router.route("/addRating").post(addRating);

module.exports = router;
