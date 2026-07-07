const mongoose = require("mongoose");

const regSchema = new mongoose.Schema({
  studentId: String,
  examId: String,
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Registration", regSchema);