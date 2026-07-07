const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// DB Connect
mongoose.connect("mongodb://127.0.0.1:27017/examDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const userRoutes = require("./routes/userRoutes");
const examRoutes = require("./routes/examRoutes");
const regRoutes = require("./routes/regRoutes");

app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/register", regRoutes);

app.get("/test", (req, res) => {
  res.send("Backend OK");
});

app.listen(5000, () => console.log("Server running on port 5000"));
const Exam = require("./models/Exam");

app.get("/addexam", async (req, res) => {
  const exam = new Exam({
    title: "Java Exam",
    date: "2026-04-25",
    duration: "2 hours",
    description: "Java basics test"
  });

  await exam.save();
  res.send("Exam Added");
});
