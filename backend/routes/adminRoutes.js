const express = require("express");
const router = express.Router();
const {viewReports, removeRating, restoreRating, getRequests} = require("../controllers/adminControllers")

router.route("/reports").get(viewReports);
router.route("/removeRating").post(removeRating);
router.route("/restoreRating").post(restoreRating);
router.route("/getRequests").get(getRequests);

module.exports = router;