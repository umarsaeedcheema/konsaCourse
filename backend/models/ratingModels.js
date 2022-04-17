const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  instructorName: {
    type: String,
    require: true,
  },
  department:{
    type:String,
    require:true,
  },
  courseName: {
    type: String,
    require: true,
  },
  courseCode: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: false,
  },
  likes: {
    type: Array,
    require: true,
    default: 0,
  },
  dislikes: {
    type: Array,
    require: true,
    default: 0,
  },
  answers: {
    type: Array,
    require: true,
  },
  instructorRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  courseRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  individualTeachRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  individualCommRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  individualAcommRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  individualWorkloadRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  individualGradeRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  individualLearnRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  tags: {
    type: Object,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
    default: true,
  },
  semester: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
});

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
