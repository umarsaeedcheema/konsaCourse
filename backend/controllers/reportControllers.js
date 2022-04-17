    const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Report = require("../models/reportModels");

const report = asyncHandler(async (req, res) => {
    const { ratingID } =
        req.body;

    const report = await Report.create({
        ratingID
    });
    if (report) {
        console.log(report);
        res.status(201).json(report);
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }
});



module.exports = report;
