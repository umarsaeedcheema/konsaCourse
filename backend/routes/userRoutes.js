const express = require("express");
const router = express.Router();
const { registerUser, login } = require("../controllers/userControllers");

router.route("/signup").post(registerUser);
router.route("/login").post(login);

module.exports = router;
