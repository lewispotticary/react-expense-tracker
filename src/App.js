import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import Table from './components/Table';
import ExpenseList from './components/ExpenseList';

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

  {/*Category Filter State */}

  const [categoryFilter, setCategoryFilter] = useState("All");

  {/*Category Filter State */}

  const [filteredExpenses, setFilteredExpenses] = useState([]);

  {/*Name Filter State */}

  const [nameFilter, setNameFilter] = useState("");

  //Use Effect
  useEffect(() => {
    categoryFilterHandler();
  },[expenseList,categoryFilter]);

  //Functions
  const categoryFilterHandler = () => {
    switch(categoryFilter){
      case "Bills":
        setFilteredExpenses(expenseList.filter(expense => expense.categoryValue === "Bills"));
        break;
      case "Entertainment":
        setFilteredExpenses(expenseList.filter(expense => expense.categoryValue === "Entertainment"));
        break;
      case "Food":
        setFilteredExpenses(expenseList.filter(expense => expense.categoryValue === "Food"))
        break;
      case "Travel":
        setFilteredExpenses(expenseList.filter(expense => expense.categoryValue === "Travel"))
        break;
      case "Miscellaneous":
        setFilteredExpenses(expenseList.filter(expense => expense.categoryValue === "Miscellaneous"))
        break;
      default:
        setFilteredExpenses(expenseList);
        break;
    }
  }

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

      <Filter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} nameFilter={nameFilter} setNameFilter={setNameFilter} setFilteredExpenses={setFilteredExpenses} expenseList={expenseList}/>

      <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} filteredExpenses={filteredExpenses}/>

    </div>
  );
}

export default App;
