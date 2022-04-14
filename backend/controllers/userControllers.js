const { response } = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res) => {
  const { username, firstName, lastName, email, password, Squestion, Sanswer } =
    req.body;
  fullName = firstName + " " + lastName;
  const emailExists = await User.findOne({ email });
  const userExists = await User.findOne({ username });
  if (emailExists) {
    res.status(400);
    throw new Error("User with provided email exists");
  } else if (userExists) {
    res.status(400);
    throw new Error("Username is already taken");
  }
  //   const { fullName } = req.body.fullName;
  console.log(fullName);
  const user = await User.create({
    username,
    firstName,
    lastName,
    fullName,
    email,
    password,
    Squestion,
    Sanswer,
    // status,
    // reportCount,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
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
      username: user.username,
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

const changePass = asyncHandler(async (req, res)=>{
  const {email, currentPassword, newPassword} = req.body;
  const user = await User.findOne({email});
  if(user && await user.matchPassword(currentPassword)){
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(newPassword, salt);
    await User.updateOne(user, {$set:{password:pass}}).then((result)=>res.status(200).json(result));
    // console.log("yo bro")
  }
  else
  {
    res.status(400);
    throw new Error('Error Occured')
  }
});



module.exports = { registerUser, login, changePass, };
