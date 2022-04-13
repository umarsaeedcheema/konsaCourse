const express = require("express");
const router = express.Router();
const {
  addInstructor,
  searchInstructor,
} = require("../controllers/instructorController");
router.route("/addInstructor").post(addInstructor);
router.route("/searchInstructor/:n").get(searchInstructor);

module.exports = router;
