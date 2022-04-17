const express = require("express");
const router = express.Router();
const { registerUser, login, changePass, forgotPassword} = require("../controllers/userControllers");

router.route("/signup").post(registerUser);
router.route("/login").post(login);
router.route("/changePassword").post(changePass);
router.route("/forgotPassword").post(forgotPassword);

module.exports = router;
