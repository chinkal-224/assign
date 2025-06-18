const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");
const auth = require("../middleware/auth");

// @route    POST /api/entries
router.post("/", auth, async (req, res) => {
  try {
    const { mood, thought } = req.body;
    const newEntry = new Entry({
      user: req.user.id,
      mood,
      thought,
    });
    const saved = await newEntry.save();
    res.json(saved);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(updatedEntry);
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).send("Update failed");
  }
});

module.exports = router;
