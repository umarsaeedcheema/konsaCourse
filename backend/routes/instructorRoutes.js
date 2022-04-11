const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userControllers");

router.route("/addInstructor").post(registerUser);
// router.route("/login").post(login);

module.exports = router;
