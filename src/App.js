import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import ExpenseList from './components/ExpenseList';

function App() {
  //useState

    //Expense Name State

    const [expenseName, setExpenseName] = useState("");

    //Amount State
    
    const [amount, setAmount] = useState("");

    //Category State

    const [category, setCategory] = useState("Bills");

    //Date State

    const [date, setDate] = useState("");

    //Expense List State

    const [expenseList, setExpenseList] = useState([]);

    //Category Filter State

    const [categoryFilter, setCategoryFilter] = useState("All");

    //Category Filter State

    const [filteredExpenses, setFilteredExpenses] = useState([]);

    //Name Filter State

    const [nameFilter, setNameFilter] = useState("");

    //Date Sort State

    const [dateSort, setDateSort] = useState("New");

  //Use Effect

    //Category filter useEffect

    useEffect(() => {
      categoryFilterHandler();
    },[categoryFilter]);

    //Name Filter useEffect
    
    useEffect(() => {
      nameFilterHandler();
    },[expenseList,nameFilter]);

  //Functions

    //Category Filter function

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

    //Name filter function

    const nameFilterHandler = () => {
      var nameLength = nameFilter.length;
      setFilteredExpenses(expenseList.filter(expense => expense.expenseName.substring(0, nameLength) === nameFilter.substring(0, nameLength)));
    }

  //Main 

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

        {/* Filter component that allows user to filter out list */}

        <Filter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} nameFilter={nameFilter} setNameFilter={setNameFilter} setFilteredExpenses={setFilteredExpenses} expenseList={expenseList} setDateSort={setDateSort} dateSort={dateSort}/>

        {/* Expense list component that outputs the inputted data into a table */}

        <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} filteredExpenses={filteredExpenses}/>

      </div>
    );
}

export default App;
