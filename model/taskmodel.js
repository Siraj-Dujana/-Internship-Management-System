const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "not completed" },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Intern'
  }
});

module.exports = mongoose.model('Task', taskSchema);
