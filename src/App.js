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

  //Use Effect
  useEffect(() => {
    filterHandler();
  },[expenseList,categoryFilter]);

  //Functions
  const filterHandler = () => {
    switch(categoryFilter){
      case "Bills":
        setFilteredExpenses(expenseList.filter(expense => expense.catergoryValue == 'Bills'));
        break;
      /*case "Entertainment":
        setFilterExpenses(expenseList.filter(expense => expense.catergoryValue === "Entertainment"))
        break;
      case "Food":
        setFilterExpenses(expenseList.filter(expense => expense.catergoryValue === "Food"))
        break;
      case "Travel":
        setFilterExpenses(expenseList.filter(expense => expense.catergoryValue === "Travel"))
        break;
      case "Miscellaneous":
        setFilterExpenses(expenseList.filter(expense => expense.catergoryValue === "Miscellaneous"))
        break;*/
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

      <Filter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}/>

      <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} filteredExpenses={filteredExpenses}/>

    </div>
  );
}

export default App;
