const expenseController = require('../controllers/expense.controller');
const express = require('express');
const router = express.Router();

router.post('/', expenseController.createExpense);
router.get('/', expenseController.getExpenses);
router.get('/filter', expenseController.getExpensesByDate);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;