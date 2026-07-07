const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: String,
  date: String,
  duration: String,
  description: String
});

module.exports = mongoose.model("Exam", examSchema);