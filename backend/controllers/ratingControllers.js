const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Rating = require("../models/ratingModels");
const Instructor = require("../models/instructorModels");
const Course = require("../models/courseModels");
const { status } = require("express/lib/response");

const addRating = asyncHandler(async (req, res) => {
  const {
    
    instructorName,
    department,
    courseName,
    courseCode,
    email,
    comment,
    likes,
    dislikes,
    answers,
    instructorRating,
    courseRating,
    individualTeachRating,
    individualCommRating,
    individualAccommRating,
    individualWorkLoadRating,
    individualGradeRating,
    individualLearnRating,
    tags,
    status,
    semester,
    year,
  } = req.body;
  const instructorExists = await Instructor.findOne({ instructorName });
  const courseExists = await Course.findOne({ courseName });
  const courseInstructorExists = await Course.findOne({ courseName, instructorExists });
  const getCourseTags = await Course.findOne({ courseName }, { tags: 1, _id: 0 })


  const emailExists = await Rating.findOne({
    email: email,
    courseCode: courseCode,
  });
  if (emailExists) {
    res.status(400);
    throw new Error("You have already rated this course");
  }
  let fullCourse = courseCode + " " + courseName;

  if (instructorExists && courseExists) {

    function ratingFormula(oldRating, newRating, number) {
      value = ((oldRating * number) + newRating) / (number + 1)
      return value
    }
    oldTags = getCourseTags
    console.log("TAGS:",oldTags)
    len = tags.length
    console.log("NEW:",tags)

    for (i = 0; i < len; i++) {
      if (oldTags.hasOwnProperty(tags[i])) {

        oldTags[tags[i]] = oldTags[tags[i]] + 1
      }
      else {
        oldTags[tags[i]] = 1
        console.log("TAGS[i]:", tags[i])
        console.log(oldTags[tags[i]])
      }
    }

    console.log("OLD TAGS:",oldTags)


    const rating = await Rating.create({
      instructorName,
      department,
      courseName,
      courseCode,
      fullCourse,
      email,
      comment,
      likes,
      dislikes,
      answers,
      instructorRating,
      courseRating,
      individualTeachRating,
      individualCommRating,
      individualAccommRating,
      individualWorkLoadRating,
      individualGradeRating,
      individualLearnRating,
      tags: tags,
      status,
      semester,
      year,
    });


    if (courseInstructorExists) {
      const thisRating = Rating.findOne({ courseName }).then(async (data) => {
        const getCourseReviews = await Course.findOne({ courseName }).then((result) => {
          // numReviews = result.numReviews
          return result
        })

        naam = instructorName
        const getInstructorReviews = await Instructor.findOne({ fullName: naam }).then(async (result) => {
          numReviews = result.numReviews
          return result
        })

        //update number of reviews for course and instructor
        await Instructor.updateOne(
          { fullName: instructorName },
          { $inc: { numReviews: 1 } }
        )

        await Course.updateOne(
          { courseName: courseName },
          { $inc: { numReviews: 1 } }
        )

        //update course ratings

        courseData = getCourseReviews


        let testRating = parseFloat(courseData["courseRating"])

        courseReviews = courseData.numReviews
        courseWorkRating = parseFloat(courseData["workRating"])
        courseGradeRating = parseFloat(courseData["gradeRating"])
        courseLearnRating = parseFloat(courseData["learnRating"])

        console.log("LEARN RATING:", courseLearnRating)


        formula = ratingFormula(testRating, courseRating, courseReviews)


        await Course.updateOne(
          { courseName: courseName },
          { $set: { courseRating: formula } }
        )


        workFormula = ratingFormula(courseWorkRating, individualWorkLoadRating, courseReviews)
        gradeFormula = ratingFormula(courseGradeRating, individualGradeRating, courseReviews)
        learnFormula = ratingFormula(courseLearnRating, individualLearnRating, courseReviews)

        await Course.updateOne(
          { courseName: courseName },
          { $set: { workRating: workFormula } }
        )

        await Course.updateOne(
          { courseName: courseName },
          { $set: { gradeRating: gradeFormula } }
        )

        await Course.updateOne(
          { courseName: courseName },
          { $set: { learnRating: learnFormula } }
        )

        //Updating instructor ratings

        instructorData = getInstructorReviews
        instructorOverallRating = parseFloat(instructorData["overallRating"])
        instructorReviews = instructorData["numReviews"]

        formula = ratingFormula(instructorOverallRating, instructorRating, instructorReviews)

        instructorAcommRating = parseFloat(instructorData["accommRating"])
        instructorCommRating = parseFloat(instructorData["commRating"])
        instructorTeachRating = parseFloat(instructorData["teachRating"])


        accommFormula = ratingFormula(instructorAcommRating, individualAccommRating, instructorReviews)
        commFormula = ratingFormula(instructorCommRating, individualCommRating, instructorReviews)
        teachFormula = ratingFormula(instructorTeachRating, individualTeachRating, instructorReviews)



      
        await Instructor.updateOne(
          { fullName: instructorName },
          { $set: { overallRating: formula } }
        )




        await Instructor.updateOne(
          { fullName: instructorName },
          { $set: { accommRating: accommFormula } }
        )

        await Instructor.updateOne(
          { fullName: instructorName },
          { $set: { commRating: commFormula } }
        )

        await Instructor.updateOne(
          { fullName: instructorName },
          { $set: { teachRating: teachFormula } }
        )


      })
    }


    else {
      console.log("ERROR")
      res.status(400);
      throw new Error("Course or Instructor does not exist. Please add.");

    }



    if (rating) {
      res.status(201).json({
        instructorName: rating.instructorName,
        courseName: rating.courseName,
        courseCode: rating.courseCode,
        email: rating.email,
        comment: rating.comment,
        likes: rating.likes,
        dislikes: rating.dislikes,
        answers: rating.answers,
        instructorRating: rating.instructorRating,
        courseRating: rating.courseRating,
        individualTeachRating: rating.individualTeachRating,
        individualCommRating: rating.individualCommRating,
        individualAccommRating: rating.individualAccommRating,
        individualWorkLoadRating: rating.individualWorkLoadRating,
        individualGradeRating: rating.individualGradeRating,
        individualLearnRating: rating.individualLearnRating,
        tags: rating.tags,
        status: rating.status,
        semester: rating.semester,
        year: rating.year,
      });
    } else {
      res.status(400);
      throw new Error("Error occured");
    }
  }
  else {
    console.log("ERROR")
    res.status(400);
    throw new Error("Course or Instructor does not exist. Please add.");
  }

});

const deleteRating = asyncHandler(async (req, res) => {
  await Rating.deleteOne({ _id: req.params.n }).then((result) => {
    res.status(200).json(result)
  });

});



const addLike = asyncHandler(async (req, res) => {
  await Rating.updateOne({ _id: req.params.n },
    { $inc: { likes: 1 } }).then((result) => {
      res.status(200).json(result)
    });
});

// const removeLike = asyncHandler(async (req,res) => {

//   await Rating.updateOne({_id: req.params.n}, 
//     {$inc: {likes: -1}}).then((result)=>{
//     res.status(200).json(result)
//   });
// });

const addDislike = asyncHandler(async (req, res) => {

  await Rating.updateOne({ _id: req.params.n },
    { $inc: { dislikes: 1 } }).then((result) => {
      res.status(200).json(result)
    });
});

// const removedisLike = asyncHandler(async (req,res) => {

//   await Rating.updateOne({_id: req.params.n}, 
//     {$inc: {dislikes: -1}}).then((result)=>{
//     res.status(200).json(result)
//   });
// });

const filterReviewsAdmin = asyncHandler(async (req, res) => {
  await Rating.find({ status: false }).then((result) => {
    res.status(200).json(result)
  });
});

const showRatings = asyncHandler(async (req, res) => {
  await Rating.find({ status: true }).then((result) => {
    res.status(200).json(result)
  });
});




const getRatings = asyncHandler(async (req, res) =>{
  var regex1 =  new RegExp(req.params.n, "i")
  await Rating.find({instructorName:regex1}).then((result)=>{
    res.status(200).json(result);
    })
})


module.exports = { addRating, deleteRating, addLike, addDislike, filterReviewsAdmin, showRatings, getRatings};
