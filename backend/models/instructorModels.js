const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  overallRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  teachRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  commRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  accommRating: {
    type: mongoose.Types.Decimal128,
    require: true,
    default: 0.0,
  },
  numReviews: {
    type: Number,
    require: true,
    default: 0,
  },
});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
