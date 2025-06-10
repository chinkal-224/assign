const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create
router.post('/', async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

// Read All
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Read One
router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});

// Update
router.put('/:id', async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.send('Course deleted');
});

module.exports = router;
