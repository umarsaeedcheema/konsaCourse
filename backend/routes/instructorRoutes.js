const express = require("express");
const router = express.Router();
const {
  addInstructor,
  searchInstructor, allCourses
} = require("../controllers/instructorController");
router.route("/addInstructor").post(addInstructor);
router.route("/searchInstructor/:n").get(searchInstructor);
router.route("/allCourses/:n").get(allCourses);


module.exports = router;
