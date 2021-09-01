import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  {/* useState */}

   {/*Expense Name State */}
  const [expenseName, setExpenseName] = useState("");

  {/*Amount State */}
  const [amount, setAmount] = useState("");

  {/*Category State */}
  const [category, setCategory] = useState("");

  {/*Date State */}
  const [date, setDate] = useState("");

  {/*Expense List State */}

  const [expenseList, setExpenseList] = useState([]);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Form 
      expenseName={expenseName} setExpenseName={setExpenseName}
      amount={amount} setAmount={setAmount} 
      category={category} setCategory={setCategory}
      date={date} setDate={setDate}
      /> {/* Form where user inputs expenses */}
      <Filter />
      <Table />
    </div>
  );
}

export default App;
