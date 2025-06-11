const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  rollNo: {
    type: Number,
    required: [true, 'Roll number is required'],
    unique: true
  },
  courses: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.length > 0;
      },
      message: 'At least one course is required'
    }
  },
  GPA: {
    type: Number,
    min: [0.0, 'GPA cannot be less than 0.0'],
    max: [4.0, 'GPA cannot be more than 4.0']
  }
});

// Export the model
module.exports = mongoose.model('Student', studentSchema);
