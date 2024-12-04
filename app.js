const express = require('express');
const cors = require('cors');
const connectDB = require('./models/db');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectDB();

// Rotas
const expenseRoutes = require('./routes/expense.router');
app.use('/api/expenses', expenseRoutes);

// Porta
app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));