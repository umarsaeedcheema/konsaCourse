const express = require("express");
const router = express.Router();
const { addCourse, searchCourse, allInstructors, courseByInstructor, getCourseTags} = require("../controllers/courseControllers");

router.route("/addCourse").post(addCourse);
router.route("/searchCourse/:n").get(searchCourse);
router.route("/allInstructors/:n").get(allInstructors);
router.route("/courseByInstructor/:n/:m").get(courseByInstructor);
router.route("/getCourseTags/:n").get(getCourseTags);


module.exports = router;
