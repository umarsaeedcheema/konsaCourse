const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  reportedUser: {
    type: String,
    require: true,
  },
  ratingID: {
    type: Number,
    require: true,
  },
  flag: {
    type: Boolean,
    require: true,
    default: true
  },
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
