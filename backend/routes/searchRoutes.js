const express = require("express");
const router = express.Router();
const { registerUser, login } = require("../controllers/userControllers");

router.route("/user").post(registerUser);
router.route("/courses").post(login);
router.route("/instructor").post();

module.exports = router;
