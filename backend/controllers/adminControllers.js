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
    // Rating.id
    await Report.remove({ratingID:ratingID}).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });

});

const restoreRating = asyncHandler(async (req, res)=>{
    const {ratingID} = req.body;
    await Report.remove({ratingID: ratingID}).then((result)=>{
        console.log(result);
        res.status(200).json("Rating Restored");
    }).catch((error)=>console.log(error));
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