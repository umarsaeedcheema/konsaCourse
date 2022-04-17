const express = require("express");
const router = express.Router();
const {addRequest, deleteRequest, approveRequest} = require("../controllers/requestControllers");



router.route("/addRequest").post(addRequest);
router.route("/deleteRequest/:n").get(deleteRequest);
router.route("/approveRequest/:n").post(approveRequest);

module.exports = router;
