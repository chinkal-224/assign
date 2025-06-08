const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  rollNo: {
    type: Number,
    required: [true, 'Roll Number is required'],
    unique: true
  },
  courses: {
    type: [String],
    validate: {
      validator: (arr) => arr.length > 0,
      message: 'At least one course required'
    }
  },
  GPA: {
    type: Number,
    min: [0.0, 'GPA cannot be less than 0.0'],
    max: [4.0, 'GPA cannot be more than 4.0']
  }
});

module.exports = mongoose.model('Student', studentSchema);
