const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModels");

const addCourse = asyncHandler(async (req, res) => {
  const {
    courseName,
    courseCode,
    instructorName,
    courseRating,
    workRating,
    gradeRating,
    learnRating,
    tags,
    numReviews,
  } = req.body;
  let fullCourse = courseCode + " " + courseName;
  const course = await Course.create({
    courseName,
    courseCode,
    fullCourse,
    instructorName,
    courseRating,
    workRating,
    gradeRating,
    learnRating,
    tags,
    numReviews,
  });
  if (course) {
    res.status(201).json({
      _id: course._id,
      courseName: course.courseName,
      courseCode: course.courseCode,
      fullCourse: course.fullCourse,
      instructorName: course.instructorName,
      courseRating: course.courseRating,
      workRating: course.workRating,
      gradeRating: course.gradeRating,
      learnRating: course.learnRating,
      tags: course.tags,
      numReviews: course.numReviews,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const searchCourse = asyncHandler(async (req, res) => {
  console.log("fvdbajfbjhfaruhwebfjer");
  var regex = new RegExp(req.params.n, "i");
  //   let combine = courseName + " " + courseCode;
  Course.find({ fullCourse: regex }).then((result) => {
    res.status(200).json(result);
  });
});


// const courseByInstructor = asyncHandler (async (req,res) => {
//   var regex = new RegExp(req.params.n, "i");
//   console.log(regex)
//   Course.find({fullCourse:regex, instructorName:regex}).then((result)=> {
//     res.status(200).json(result)
//   });
// });
module.exports = { addCourse, searchCourse};
