const express = require("express");
const router = express.Router();

const Registration = require("../models/Registration");

// Apply Exam
router.post("/", async (req, res) => {
  try {
    const reg = new Registration(req.body);
    await reg.save();
    res.json({ message: "Applied Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Registrations
router.get("/", async (req, res) => {
  try {
    const data = await Registration.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;   // ✅ THIS LINE MUST BE THERE