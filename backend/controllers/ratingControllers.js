const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Rating = require("../models/ratingModels");
const Instructor = require("../models/instructorModels");
const Course = require("../models/courseModels");
const { status } = require("express/lib/response");

const addRating = asyncHandler(async (req, res) => {
  const {
    ratingID,
    instructorName,
    courseName,
    courseCode,
    email,
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
  const emailExists = await Rating.findOne({
    email: email,
    courseCode: courseCode,
  });
  if (emailExists) {
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
      email,
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
    
    naam = instructorName.split(" ")
    console.log("NAAM:",naam)
    first = naam[0]
    second = naam[1]
    const instructor = await Instructor.create({
    firstName: first,
    lastName: second,
    course: courseName,
    overallRating: instructorRating,
    teachRating: individualTeachRating,
    commRating: individualCommRating,
    accommRating: individualAccommRating,
    numReviews:1,
    });

    const course = await Course.create({
      courseName: courseName,
      courseCode: courseCode,
      fullCourse: courseName + " " + courseCode,
      instructorName: instructorName,
      courseRating: courseRating,
      workRating: individualWorkLoadRating,
      gradeRating: individualGradeRating,
      learnRating: individualLearnRating,
      tags: [],
      numReviews: 1,
    });

    if (rating) {
      res.status(201).json({
        ratingID: rating.ratingID,
        instructorName: rating.instructorName,
        courseName: rating.courseName,
        courseCode: rating.courseCode,
        email: rating.email,
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
      email,
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
        email: rating.email,
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
      email: rating.email,
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

const deleteRating = asyncHandler(async (req, res) => {
  await Rating.deleteOne({ ratingID: req.params.n }).then((result) => {
    res.status(200).json(result)
  });

});

const addLike = asyncHandler(async (req, res) => {

  await Rating.updateOne({ ratingID: req.params.n },
    { $inc: { likes: 1 } }).then((result) => {
      res.status(200).json(result)
    });
});

// const removeLike = asyncHandler(async (req,res) => {

//   await Rating.updateOne({ratingID: req.params.n}, 
//     {$inc: {likes: -1}}).then((result)=>{
//     res.status(200).json(result)
//   });
// });

const addDislike = asyncHandler(async (req, res) => {

  await Rating.updateOne({ ratingID: req.params.n },
    { $inc: { dislikes: 1 } }).then((result) => {
      res.status(200).json(result)
    });
});

// const removedisLike = asyncHandler(async (req,res) => {

//   await Rating.updateOne({ratingID: req.params.n}, 
//     {$inc: {dislikes: -1}}).then((result)=>{
//     res.status(200).json(result)
//   });
// });

const filterReviewsAdmin = asyncHandler(async (req, res) => {
  await Rating.find({ status: false }).then((result) => {
    res.status(200).json(result)
  });

});

const showRatings = asyncHandler(async (req, res) => {
  await Rating.find({ status: true }).then((result) => {
    res.status(200).json(result)
  });

});


const approve = asyncHandler(async(req,res) => {
  await Rating.updateOne({ ratingID: req.params.n },
    { $set: { status: true } }).then((result) => {
      res.status(200).json(result)
    });

})

const getRatings = asyncHandler(async (req, res) =>{
  var regex1 =  new RegExp(req.params.n, "i")
  await Rating.find({instructorName:regex1}).then((result)=>{
    res.status(200).json(result);
    })
})


module.exports = { addRating, deleteRating, addLike, addDislike, filterReviewsAdmin, showRatings, approve, getRatings};
