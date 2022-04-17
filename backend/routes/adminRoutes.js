const express = require("express");
const router = express.Router();
const {viewReports, removeRating, restoreRating} = require("../controllers/adminControllers")

router.route("/reports").get(viewReports);
router.route("/removeRating").post(removeRating);
router.route("/restoreRating").post(restoreRating);

module.exports = router;