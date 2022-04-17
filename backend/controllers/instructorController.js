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
    tags,
    numReviews,
  } = req.body;

  const tagArray = await tags.reduce((accumulator, value) => {
      return {...accumulator, [value]: 1};
    }, {});

  let fullName = firstName + " " + lastName;
  console.log(fullName);
  const instructorExists = await Instructor.findOne({fullName});
  const newCourse = course
  if (instructorExists) {

    console.log(newCourse)

    await Instructor.updateOne(
      { fullName: fullName },
      { $push: { course: {$each:  newCourse }}}
    )
    
    res.status(201).json({ added: newCourse })
  }
  else {
    

    const instructor = await Instructor.create({
      firstName,
      lastName,
      fullName,
      course,
      overallRating,
      teachRating,
      commRating,
      accommRating,
      tags: tagArray,
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
        tags: instructor.tags,
        numReviews: instructor.numReviews,
      });
    } else {
      res.status(400);
      throw new Error("Error occured");
    }
  }
});

const searchInstructor = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  await Instructor.find({ fullName: regex }).then((result) => {
    res.status(200).json(result);
  });
});

const allCourses = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  await Instructor.find({ fullName: regex }, { course: 1, _id: 0 }).then((result) => {
    res.status(200).json(result)
  });
})


const allNames = asyncHandler(async (req, res) => {
  await Instructor.find({}, { fullName: 1, _id: 0 }).then((result) => {
    res.status(200).json(result)
    // console.log(result[0]["fullName"])
  })
})

const getInstructorTags = asyncHandler(async(req,res)=>{
  var regex = new RegExp(req.params.n, "i");
  Instructor.find({ fullName: regex }, { tags: 1, _id: 0 }).then((result) => {
    let newdict = { ...result}
    let tempdict = newdict["0"]["tags"]
    tagArray = []
    for (i = 0; i < 3; i++) {
      elem = Object.keys(tempdict).reduce(function (a, b) { return tempdict[a] > tempdict[b] ? a : b });
      tagArray.push(elem)
      delete tempdict[elem]
    }
    res.status(200).json(tagArray)
  });
    
})

module.exports = { addInstructor, searchInstructor, allCourses, allNames, getInstructorTags};
