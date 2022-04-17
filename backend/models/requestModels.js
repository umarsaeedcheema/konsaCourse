const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
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

});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;


