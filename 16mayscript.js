let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const listEl = document.getElementById("transaction-list");
const form = document.getElementById("transaction-form");
const descInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

function addTransaction(e) {
  e.preventDefault();

  const description = descInput.value.trim();
  const amount = Number(amountInput.value);

  if (!description || isNaN(amount)) return;

  const transaction = {
    id: Date.now(),
    description,
    amount,
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  form.reset();
}

function deleteTransaction(id) {
  transactions = transactions.filter(txn => txn.id !== id);
  updateLocalStorage();
  renderTransactions();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function renderTransactions() {
  listEl.innerHTML = "";

  let income = 0;
  let expense = 0;

  transactions.forEach(txn => {
    const li = document.createElement("li");
    li.classList.add(txn.amount >= 0 ? "income" : "expense");

    li.innerHTML = `
      ${txn.description} 
      <span>${txn.amount < 0 ? "-" : "+"}$${Math.abs(txn.amount)}</span>
      <span class="delete-btn" onclick="deleteTransaction(${txn.id})">❌</span>
    `;

    listEl.appendChild(li);

    if (txn.amount >= 0) {
      income += txn.amount;
    } else {
      expense += txn.amount;
    }
  });

  balanceEl.textContent = income + expense;
  incomeEl.textContent = income;
  expenseEl.textContent = Math.abs(expense);
}

form.addEventListener("submit", addTransaction);

// Initial load
renderTransactions();
