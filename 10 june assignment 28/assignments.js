const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Create
router.post('/', async (req, res) => {
  const assignment = await Assignment.create(req.body);
  res.json(assignment);
});

// Read All
router.get('/', async (req, res) => {
  const assignments = await Assignment.find().populate('courseId');
  res.json(assignments);
});

// Read One
router.get('/:id', async (req, res) => {
  const assignment = await Assignment.findById(req.params.id).populate('courseId');
  res.json(assignment);
});

// Update
router.put('/:id', async (req, res) => {
  const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(assignment);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.send('Assignment deleted');
});

module.exports = router;
