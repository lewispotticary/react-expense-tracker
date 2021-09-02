import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import Table from './components/Table';
import ExpenseList from './components/ExpenseList';
import Expense from './components/Expense';

function App() {
  {/* useState */}

   {/*Expense Name State */}
  const [expenseName, setExpenseName] = useState("");

  {/*Amount State */}
  const [amount, setAmount] = useState("");

  {/*Category State */}
  const [category, setCategory] = useState("Bills");

  {/*Date State */}
  const [date, setDate] = useState("");

  {/*Expense List State */}

  const [expenseList, setExpenseList] = useState([]);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {/* Form where user inputs expenses */}
      <Form 
      expenseName={expenseName} setExpenseName={setExpenseName}
      amount={amount} setAmount={setAmount} 
      category={category} setCategory={setCategory}
      date={date} setDate={setDate}
      expenseList={expenseList} setExpenseList={setExpenseList}/>

      <Filter />

      <Table />

      <ExpenseList expenseList={expenseList}/>

    </div>
  );
}

export default App;
