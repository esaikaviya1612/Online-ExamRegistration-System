const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User Registered" });
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if(user){
    res.json(user);
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
});

module.exports = router;