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

  // console.log(tags)
  const tagArray = await tags.reduce((accumulator, value) => {
    return {...accumulator, [value]: 1};
  }, {});
  // console.log(tagArray)

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
    tags : tagArray,
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
  var regex = new RegExp(req.params.n, "i");
  Course.find({ fullCourse: regex }).then((result) => {
    res.status(200).json(result);
  });
});


const allInstructors = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  await Course.find({ courseName: regex }, { instructorName: 1, _id: 0 }).then((result) => {
    len = result.length
    resultArr = []
    for(i =0;i<len;i++)
    {
      resultArr.push(result[i].instructorName)

    }

    res.status(200).json(resultArr)
  });
});


<<<<<<< HEAD
  const courseByInstructor = asyncHandler (async (req,res) => {
    var regex1 = new RegExp(req.params.n, "i");
    var regex2 = new RegExp(req.params.m, "i");
    Course.find({courseName:regex1, instructorName:regex2}).then((result)=> {
      res.status(201).json(result);
    }).catch((error)=>{
    console.log(error); 
  });
=======
const courseByInstructor = asyncHandler(async (req, res) => {
  var regex1 = new RegExp(req.params.n, "i");
  var regex2 = new RegExp(req.params.m, "i");
  Course.find({ courseName: regex1, instructorName: regex2 }).then((result) => {
    res.status(200).json(result)
  });
});

const getCourseTags = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  Course.find({ courseName: regex }, { tags: 1, _id: 0 }).then((result) => {
    let newdict = { ...result}
    let tempdict = newdict["0"]["tags"]
    tagArray = []
    for (i = 0; i < 3; i++) {
      elem = Object.keys(tempdict).reduce(function (a, b) { return tempdict[a] > tempdict[b] ? a : b });
      tagArray.push(elem)
      delete tempdict[elem]
    }
    res.status(200).json(tagArray)
>>>>>>> 85cf1548ffd0c262f52c3cbe92c8e9c48d823ecb
  });


})
// module.exports = { addCourse, searchCourse, allInstructors, courseByInstructor, getCourseTags };


  const uniqueCourses = asyncHandler(async (req, res)=>{
    console.log("in unique courses")
    var courseName = req.params.n;
    Course.distinct("courseName").then((result)=>{
      res.status(200).json(result);
    });
  });
  module.exports = { addCourse, searchCourse, allInstructors, courseByInstructor, uniqueCourses, getCourseTags};
  
