const express = require("express");
const router = express.Router();
const { addCourse, searchCourse, allInstructors, courseByInstructor, getCourseTags, uniqueCourses} = require("../controllers/courseControllers");
// const { addCourse, searchCourse, allInstructors, courseByInstructor, uniqueCourses} = require("../controllers/courseControllers");

router.route("/addCourse").post(addCourse);
router.route("/searchCourse/:n").get(searchCourse);
router.route("/allInstructors/:n").get(allInstructors);
router.route("/courseByInstructor/:n/:m").get(courseByInstructor);
router.route("/getCourseTags/:n").get(getCourseTags);

router.route("/uniqueCourses/:n").get(uniqueCourses);

module.exports = router;
