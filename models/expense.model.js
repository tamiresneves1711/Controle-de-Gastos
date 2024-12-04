

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Expense', expenseSchema);
