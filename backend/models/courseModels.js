const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    require: true,
  },
  courseCode: {
    type: String,
    require: true,
  },
  fullCourse: {
    type: String,
    require: true,
  },
  instructorName: {
    type: String,
    require: true,
  },
  department:{
    type:String,
    require:true,
  },
  courseRating: {
    //overall rating
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  workRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  gradeRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  learnRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  tags: {
    type: Object,
    require: true,
  },
  numReviews: {
    type: Number,
    require: true,
    default : 1,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
