const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Squestion: {
    type: String,
    required: true,
  },
  Sanswer: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean, // true for active false for inactive
    required: true,
    default: true,
  },
  reportCount: {
    type: Number,
    required: true,
    default: 0,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// userSchema.methods.changePassword = async function (newPassword){
//   try{

//   }

 
// };

const User = mongoose.model("User", userSchema);
module.exports = User;
