const { response } = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res) => {
  const {firstName, lastName, email, password, Squestion, Sanswer } =
    req.body;
  // console.log(req.body);
  fullName = firstName + " " + lastName;
  const emailExists = await User.findOne({ email });
  // const userExists = await User.findOne({ rollNumber });
  if (emailExists) {
    res.status(400);
    throw new Error("User with provided email exists");
  } 
  // else if (userExists) {
  //   res.status(400);
  //   throw new Error("rollNumber is already taken");
  // }
  //   const { fullName } = req.body.fullName;
  // console.log(fullName);
  const user = await User.create({
    firstName,
    lastName,
    fullName,
    email,
    password,
    Squestion,
    Sanswer,
    // reportCount,
    // isAdmin,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
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
    res.status(400).json({error:"Invalid Email or Password"});
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
    if(!await user.matchPassword(currentPassword)){
      res.status(400).json({error:"Incorrect Current Password"})
    }
    // res.status(400);
    throw new Error('Error Occured')
  }
});

const forgotPassword = asyncHandler(async(req, res)=>{
  const {email, Squestion, Sanswer, newPassword} = req.body;
  await User.find({email:email}).then(async (result)=>{
    userEmail =result[0].email
    if(Squestion === result[0].Squestion){
      if(Sanswer === result[0].Sanswer){
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(newPassword, salt);
        await User.updateOne({email:userEmail}, {$set:{password:pass}}).then((data)=>{
          res.status(200).json(data)

        }).catch((error)=>res.status(401).json(error))
      }
      else{
        res.status(400).json({error:"Answer did not match"})
      }
    }
    else{
      res.status(400).json({error:"Question did not match"})
    }
  })
})



module.exports = { registerUser, login, changePass, forgotPassword};
