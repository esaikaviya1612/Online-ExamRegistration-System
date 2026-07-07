const express = require("express");
const router = express.Router();
const Exam = require("../models/Exam");

// Create Exam (Admin)
router.post("/", async (req, res) => {
  const exam = new Exam(req.body);
  await exam.save();
  res.json({ message: "Exam Created" });
});

// Get Exams
router.get("/", async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
});

module.exports = router;