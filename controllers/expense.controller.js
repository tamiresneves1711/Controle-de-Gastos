const Expense = require('../models/expense.model');

// Criar uma nova despesa
exports.createExpense = async (req, res) => {
  try {
    const { description, value, date } = req.body;
    const newExpense = new Expense({ description, value, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todas as despesas
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Filtrar despesas por período
exports.getExpensesByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const expenses = await Expense.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 
// Excluir uma despesa
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Despesa excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

