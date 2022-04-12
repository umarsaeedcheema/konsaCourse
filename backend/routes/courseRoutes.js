const express = require("express");
const router = express.Router();
const { addCourse, searchCourse } = require("../controllers/courseControllers");

router.route("/addCourse").post(addCourse);
router.route("/searchCourse/:n").get(searchCourse);

module.exports = router;
