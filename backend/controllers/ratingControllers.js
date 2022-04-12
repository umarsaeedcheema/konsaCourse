const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Rating = require("../models/ratingModels");
const Instructor = require("../models/instructorModels");
const Course = require("../models/courseModels");

const addRating = asyncHandler(async (req, res) => {
  const {
    ratingID,
    instructorName,
    courseName,
    courseCode,
    username,
    comment,
    likes,
    dislikes,
    answers,
    instructorRating,
    courseRating,
    individualTeachRating,
    individualCommRating,
    individualAccommRating,
    individualWorkLoadRating,
    individualGradeRating,
    individualLearnRating,
    status,
    semester,
    year,
  } = req.body;
  const instructorExists = await Instructor.findOne({ instructorName });
  const courseExists = await Course.findOne({ courseCode });
  const usernameExists = await Rating.findOne({
    username: username,
    courseCode: courseCode,
  });
  if (usernameExists) {
    res.status(400);
    throw new Error("You have already rated this course");
  }
  let fullCourse = courseCode + " " + courseName;
  if (instructorExists && courseExists) {
    const rating = await Rating.create({
      ratingID,
      instructorName,
      courseName,
      courseCode,
      fullCourse,
      username,
      comment,
      likes,
      dislikes,
      answers,
      instructorRating,
      courseRating,
      individualTeachRating,
      individualCommRating,
      individualAccommRating,
      individualWorkLoadRating,
      individualGradeRating,
      individualLearnRating,
      status,
      semester,
      year,
    });
    if (rating) {
      res.status(201).json({
        ratingID: rating.ratingID,
        instructorName: rating.instructorName,
        courseName: rating.courseName,
        courseCode: rating.courseCode,
        userName: rating.userName,
        comment: rating.comment,
        likes: rating.likes,
        dislikes: rating.dislikes,
        answers: rating.answers,
        instructorRating: rating.instructorRating,
        courseRating: rating.courseRating,
        individualTeachRating: rating.individualTeachRating,
        individualCommRating: rating.individualCommRating,
        individualAccommRating: rating.individualAccommRating,
        individualWorkLoadRating: rating.individualWorkLoadRating,
        individualGradeRating: rating.individualGradeRating,
        individualLearnRating: rating.individualLearnRating,
        status: rating.status,
        semester: rating.semester,
        year: rating.year,
      });
    } else {
      res.status(400);
      throw new Error("Error occured");
    }
  } else {
    const rating = await Rating.create({
      ratingID,
      instructorName,
      courseName,
      courseCode,
      fullCourse,
      username,
      comment,
      likes,
      dislikes,
      answers,
      instructorRating,
      courseRating,
      individualTeachRating,
      individualCommRating,
      individualAccommRating,
      individualWorkLoadRating,
      individualGradeRating,
      individualLearnRating,
      status: false,
      semester,
      year,
    });
    if (rating) {
      res.status(201).json({
        ratingID: rating.ratingID,
        instructorName: rating.instructorName,
        courseName: rating.courseName,
        courseCode: rating.courseCode,
        userName: rating.userName,
        comment: rating.comment,
        likes: rating.likes,
        dislikes: rating.dislikes,
        answers: rating.answers,
        instructorRating: rating.instructorRating,
        courseRating: rating.courseRating,
        individualTeachRating: rating.individualTeachRating,
        individualCommRating: rating.individualCommRating,
        individualAccommRating: rating.individualAccommRating,
        individualWorkLoadRating: rating.individualWorkLoadRating,
        individualGradeRating: rating.individualGradeRating,
        individualLearnRating: rating.individualLearnRating,
        status: rating.status,
        semester: rating.semester,
        year: rating.year,
      });
    } else {
      res.status(400);
      throw new Error("Error occured");
    }
  }
  if (rating) {
    res.status(201).json({
      ratingID: rating.ratingID,
      instructorName: rating.instructorName,
      courseName: rating.courseName,
      courseCode: rating.courseCode,
      userName: rating.userName,
      comment: rating.comment,
      likes: rating.likes,
      dislikes: rating.dislikes,
      answers: rating.answers,
      instructorRating: rating.instructorRating,
      courseRating: rating.courseRating,
      individualTeachRating: rating.individualTeachRating,
      individualCommRating: rating.individualCommRating,
      individualAccommRating: rating.individualAccommRating,
      individualWorkLoadRating: rating.individualWorkLoadRating,
      individualGradeRating: rating.individualGradeRating,
      individualLearnRating: rating.individualLearnRating,
      status: rating.status,
      semester: rating.semester,
      year: rating.year,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

module.exports = addRating;
