const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/userModels");
const searchRoutes = require("./routes/searchRoutes");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server started at port ${PORT}!`));
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

app.use(express.json());
app.use("/", userRoutes);
app.use("/search", searchRoutes);

app.get("/searchusers/:n", (req, res) => {
  var regex = new RegExp(req.params.n, "i");
  User.find({ fullName: regex }).then((result) => {
    res.status(200).json(result);
  });
});

// app.use("/search", searchRoutes);
