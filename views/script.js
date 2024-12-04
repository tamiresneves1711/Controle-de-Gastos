const API_URL = 'http://localhost:3000/api/expenses';

document.getElementById('expenseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const value = document.getElementById('value').value;
    const date = document.getElementById('date').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, value, date }),
    });

    loadExpenses();
});

async function loadExpenses() {
    const res = await fetch(API_URL);
    const expenses = await res.json();
    const list = document.getElementById('expenseList');
    list.innerHTML = '';
    expenses.forEach((expense) => {
        const li = document.createElement('li');
        li.textContent = `${expense.description} - R$${expense.value} - ${new Date(
            expense.date
        ).toLocaleDateString()}`;
        list.appendChild(li);
    });
}

loadExpenses();
