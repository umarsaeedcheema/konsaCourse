const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Instructor = require("../models/instructorModels");
// const User = require("../models/userModels");
const Course = require("../models/courseModels");


const addInstructor = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    course,
    overallRating,
    teachRating,
    commRating,
    accommRating,
    numReviews,
  } = req.body;
  let fullName = firstName + " " + lastName;
  console.log(fullName);
  const instructor = await Instructor.create({
    firstName,
    lastName,
    fullName,
    course,
    overallRating,
    teachRating,
    commRating,
    accommRating,
    numReviews,
  });
  if (instructor) {
    res.status(201).json({
      _id: instructor._id,
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      fullName: instructor.fullname,
      course: instructor.course,
      overallRating: instructor.overallRating,
      teachRating: instructor.teachRating,
      commRating: instructor.commRating,
      accommRating: instructor.accommRating,
      numReviews: instructor.numReviews,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const searchInstructor = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  Instructor.find({ fullName: regex }).then((result) => {
    res.status(200).json(result);
  });
});

const allCourses = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  await Instructor.find({ fullName: regex }, {course:1, _id:0}).then((result) => {
    res.status(200).json(result)
  });



})
module.exports = { addInstructor, searchInstructor, allCourses };
