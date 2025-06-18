const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create User
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.json({ message: "User created", user: newUser });
});

// Login User (check only email match for now)
router.post("/login", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) res.json({ message: "Login success", user });
  else res.status(404).json({ message: "User not found" });
});

// Get all users (for Compass preview)
router.get("/", async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});

module.exports = router;
