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


const allInstructors = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  await Course.find({ courseName: regex }, { instructorName: 1, _id: 0 }).then((result) => {
    res.status(200).json(result)
  });
});


  const courseByInstructor = asyncHandler (async (req,res) => {
    var regex1 = new RegExp(req.params.n, "i");
    var regex2 = new RegExp(req.params.m, "i");
    Course.find({courseName:regex1, instructorName:regex2}).then((result)=> {
      res.status(200).json(result)
    });
  });

  const uniqueCourses = asyncHandler(async (req, res)=>{
    var courseName = req.params.n;
    Course.distinct("courseName").then((result)=>{
      res.status(200).json(result);
    });
  });
  module.exports = { addCourse, searchCourse, allInstructors, courseByInstructor, uniqueCourses};
  
