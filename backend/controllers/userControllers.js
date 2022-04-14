const { response } = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");

const registerUser = asyncHandler(async (req, res) => {
  const { rollNumber, firstName, lastName, email, password, Squestion, Sanswer } =
    req.body;
  fullName = firstName + " " + lastName;
  const emailExists = await User.findOne({ email });
  const userExists = await User.findOne({ rollNumber });
  if (emailExists) {
    res.status(400);
    throw new Error("User with provided email exists");
  } else if (userExists) {
    res.status(400);
    throw new Error("rollNumber is already taken");
  }
  //   const { fullName } = req.body.fullName;
  console.log(fullName);
  const user = await User.create({
    rollNumber,
    firstName,
    lastName,
    fullName,
    email,
    password,
    Squestion,
    Sanswer,

    reportCount,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      rollNumber: user.rollNumber,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullname,
      question: user.Squestion,
      answer: user.Sanswer,
      email: user.email,
      password: user.password,
      status: user.status,
      isAdmin: user.isAdmin,
      reportCount: user.reportCount,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      rollNumber: user.rollNumber,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      question: user.Squestion,
      answer: user.Sanswer,
      email: user.email,
      password: user.password,
      status: user.status,
      reportCount: user.reportCount,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

module.exports = { registerUser, login };
