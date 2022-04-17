const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  ratingID: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,  
  }
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
