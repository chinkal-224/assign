const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  title: String,
  content: String,
  dueDate: Date
});

module.exports = mongoose.model('Assignment', assignmentSchema);
