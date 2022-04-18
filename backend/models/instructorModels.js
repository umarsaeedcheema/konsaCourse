const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
<<<<<<< HEAD
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
  department:{
    type:String,
    require:false,
    default:""
  },
  course: {
    type: Array,
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
  tags: {
    type: Object,
    require: false,
    default:[]
  },
  numReviews: {
    type: Number,
    require: true,
    default: 0,
  },
=======
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
    department: {
        type: String,
        require: true,
    },
    course: {
        type: Array,
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
    tags: {
        type: Object,
        require: true,
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
    },
>>>>>>> 00eb34bdb826e05e4d9eae00a7d8dad281e71d86
});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;