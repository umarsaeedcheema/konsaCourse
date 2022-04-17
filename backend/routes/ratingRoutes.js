const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const {addRating, deleteRating, addLike, addDislike, filterReviewsAdmin, showRatings, approve, getRatings} = require("../controllers/ratingControllers");
=======
const {addRating, deleteRating, addLike, addDislike, filterReviewsAdmin, showRatings} = require("../controllers/ratingControllers");
>>>>>>> 85cf1548ffd0c262f52c3cbe92c8e9c48d823ecb

router.route("/addRating").post(addRating);
router.route("/deleteRating/:n").get(deleteRating);
router.route("/addLike/:n").post(addLike)
router.route("/addDislike/:n").post(addDislike)
router.route("/filterReviewsAdmin").get(filterReviewsAdmin);
router.route("/showRatings").get(showRatings);
<<<<<<< HEAD
router.route("/approve/:n").post(approve);
router.route("/getRatings/:n").get(getRatings);

=======
>>>>>>> 85cf1548ffd0c262f52c3cbe92c8e9c48d823ecb



module.exports = router;
