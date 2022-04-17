const {response} = require("express");
const asyncHandler = require("express-async-handler");
const Report = require("../models/reportModels");
const Rating = require("../models/ratingModels")

const removeRating = asyncHandler(async (req, res)=>{
    const {ratingID} = req.body;
    await Rating.remove({_id:ratingID}).then((result)=>{
        console.log(result);
        res.status(200).json("Rating removed");

    })
    .catch((error)=>{
        console.log(error);
        res.status(400).error(error);
    })
    await Report.remove({_id:this.id});

});

const restoreRating = asyncHandler(async (req, res)=>{
    await Report.remove({_id: this.id});
});

const viewReports = asyncHandler(async (req, res)=>{
    console.log('hello');
    await Report.find().then((result)=>{
        res.status(200).json(result);
        console.log(result);
    })
    .catch((error)=>{
        res.status(400).json(error);
        console.log(error)
    });
})

module.exports = {removeRating, restoreRating, viewReports};