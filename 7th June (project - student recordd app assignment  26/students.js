const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all students with pagination and sorting by GPA desc
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const students = await Student.find()
      .sort({ GPA: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get student by rollNo
router.get('/:rollNo', async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollNo });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update student by rollNo
router.put('/:rollNo', async (req, res) => {
  try {
    const updated = await Student.findOneAndUpdate(
      { rollNo: req.params.rollNo },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Student not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete student by rollNo
router.delete('/:rollNo', async (req, res) => {
  try {
    const deleted = await Student.findOneAndDelete({ rollNo: req.params.rollNo });
    if (!deleted) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
