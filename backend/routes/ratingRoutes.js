const express = require("express");
const router = express.Router();
const {addRating, deleteRating, addLike, addDislike, filterReviewsAdmin} = require("../controllers/ratingControllers");

router.route("/addRating").post(addRating);
router.route("/deleteRating/:n").get(deleteRating);
router.route("/addLike/:n").post(addLike)
router.route("/addDislike/:n").post(addDislike)
router.route("/filterReviewsAdmin").get(filterReviewsAdmin);



module.exports = router;
