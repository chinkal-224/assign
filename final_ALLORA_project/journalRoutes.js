const express = require("express");
const router = express.Router();
const Journal = require("../models/Journal");

// Create entry
router.post("/add", async (req, res) => {
  const { userId, mood, thought } = req.body;

  if (!userId || !mood || !thought) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const entry = new Journal({ userId, mood, thought });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ message: "Failed to save entry" });
  }
});

// Get entries for user
router.get("/:userId", async (req, res) => {
  try {
    const entries = await Journal.find({ userId: req.params.userId }).sort({ timestamp: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch entries" });
  }
});

// Delete entry
router.delete("/:id", async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ message: "Entry deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});
// Update entry by ID
router.put("/:id", async (req, res) => {
  const { mood, thought } = req.body;

  if (!mood || !thought) {
    return res.status(400).json({ message: "Mood and Thought required" });
  }

  try {
    const updated = await Journal.findByIdAndUpdate(
      req.params.id,
      { mood, thought },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});


module.exports = router;
