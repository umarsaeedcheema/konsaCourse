const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Request = require("../models/requestModels");
const Instructor = require("../models/instructorModels");
const Course = require("../models/courseModels");

const addRequest = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        department,
        courseName,
        courseCode
    } = req.body

    let fullName = firstName + " " + lastName;
    let fullCourse = courseCode + " " + courseName;

    const request = await Request.create({
        firstName,
        lastName,
        fullName,
        department,
        courseName,
        courseCode,
        fullCourse
    });

    if (request) {
        res.status(201).json({
          firstName: request.firstName,
          lastName: request.lastName,
          fullName: request.fullName,
          department : request.department,
          courseName: request.courseName,
          courseCode: request.courseCode,
          fullCourse: request.fullCourse,
        });
      } else {
        res.status(400);
        throw new Error("Error occured");
      }
});

const deleteRequest = asyncHandler(async (req, res) => {
    await Request.deleteOne({ _id: req.params.n }).then((result) => {
      res.status(200).json(result)
    });
  
  });


const approveRequest = asyncHandler(async(req,res) => {
const thisRating = Request.findOne({ _id: req.params.n }).then(async (data)=>{
    
    res.status(200).json(data)
    firstName = data.firstName
    lastName = data.lastName
    department = data.department
    courseCode = data.courseCode
     fullName = data.fullName
     courseName = data.courseName
     instructorName = fullName
     fullCourse = data.fullCourse
      const instructorExists = await Instructor.findOne({fullName});
      const courseExists = await Course.findOne({ courseName });


  if(instructorExists)
  {
    const course = await Course.create({
        courseName,
        courseCode,
        fullCourse,
        department,
        instructorName,
        numReviews:0
      });

      await Instructor.updateOne(
        { fullName: instructorName },
        { $push: { course: { $each: courseName } } }
      )
  }
  else if(courseExists)
  {
    const instructor = await Instructor.create({
        firstName,
        lastName,
        fullName,
        fullCourse,
        department,
        overallRating: 0,
        teachRating: 0,
        commRating: 0,
        accommRating: 0,
        tags: tagArray,
        numReviews: 0,
      });
  }
  else{
    const instructor = await Instructor.create({
        firstName,
        lastName,
        fullName,
        fullCourse,
        department,
        overallRating: 0,
        teachRating: 0,
        commRating: 0,
        accommRating: 0,
        numReviews: 0,
      });

      const course = await Course.create({
        courseName,
        courseCode,
        fullCourse,
        department,
        instructorName,
        numReviews:0,
      });
  }

})
})


module.exports = { addRequest, deleteRequest,approveRequest};
