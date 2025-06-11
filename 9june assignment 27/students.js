const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
  try {
    const { name, rollNo, courses, GPA } = req.body;

    if (!name || !rollNo || !courses || courses.length === 0) {
      return res.status(400).json({
        error: 'Name, rollNo, and at least one course are required',
      });
    }

    if (GPA < 0.0 || GPA > 4.0) {
      return res.status(400).json({ error: 'GPA must be between 0.0 and 4.0' });
    }

    const existingStudent = await Student.findOne({ rollNo });
    if (existingStudent) {
      return res.status(409).json({ error: 'Student with this rollNo already exists' });
    }

    const student = new Student({ name, rollNo, courses, GPA });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all students with optional pagination and GPA sorting
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const students = await Student.find()
      .sort({ GPA: -1 }) // Descending GPA
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a student by roll number
router.get('/:rollNo', async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollNo });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a student by roll number
router.put('/:rollNo', async (req, res) => {
  try {
    const { name, courses, GPA } = req.body;

    if (GPA !== undefined && (GPA < 0.0 || GPA > 4.0)) {
      return res.status(400).json({ error: 'GPA must be between 0.0 and 4.0' });
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { rollNo: req.params.rollNo },
      { name, courses, GPA },
      { new: true, runValidators: true }
    );

    if (!updatedStudent)
      return res.status(404).json({ error: 'Student not found' });

    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a student by roll number
router.delete('/:rollNo', async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({ rollNo: req.params.rollNo });
    if (!deletedStudent)
      return res.status(404).json({ error: 'Student not found' });

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
