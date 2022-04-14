const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Report = require("../models/reportModels");

const report = asyncHandler(async (req, res) => {
    const { reportedUser, ratingID, flag } =
        req.body;

    const report = await Report.create({
        reportedUser,
        ratingID,
        flag,
    });
    if (report) {
        res.status(201).json({
            _id: report._id,
            reportedUser: report.reportedUser,
            ratingID: report.ratingID,
            flag: report.flag,

        });
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }
});



module.exports = report;
