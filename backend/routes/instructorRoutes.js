const express = require("express");
const router = express.Router();
const {
  addInstructor,
  searchInstructor, allCourses, allNames
} = require("../controllers/instructorController");
router.route("/addInstructor").post(addInstructor);
router.route("/searchInstructor/:n").get(searchInstructor);
router.route("/allCourses/:n").get(allCourses);
router.route("/allNames").get(allNames);



module.exports = router;
