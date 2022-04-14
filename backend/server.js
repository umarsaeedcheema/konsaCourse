const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/userModels");
// const searchRoutes = require("./routes/searchRoutes");
const instructorRoutes = require("./routes/instructorRoutes");
const courseRoutes = require("./routes/courseRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const reportRoutes = require("./routes/reportRoutes");
dotenv.config();

connectDB();

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server started at port ${PORT}!`));

app.use(express.json());
app.use("/", userRoutes);
app.use("/instructor", instructorRoutes);
app.use("/course", courseRoutes);
app.use("/rate", ratingRoutes);
app.use("/report", reportRoutes)

//direct APIs with out any routing

app.get("/searchusers/:n", (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  User.find({ fullName: regex }).then((result) => {
    res.status(200).json(result);
  });
});
