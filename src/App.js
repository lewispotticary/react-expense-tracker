import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import ExpenseList from './components/ExpenseList';
import Total from './components/Total'

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

    //Total State

    const [total, setTotal] = useState("");

  //Use Effect

    //Category filter useEffect

    useEffect(() => {
      categoryFilterHandler();
    },[categoryFilter]);

    //Name Filter and total useEffect
    
    useEffect(() => {
      nameFilterHandler();
      totalHandler();
    },[expenseList,nameFilter]);

    //Date Filter useEffect
    
    useEffect(() => {
      dateSortHandler();
    },[dateSort]);

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

    //Date sort function

    const dateSortHandler = () => {
      switch(dateSort){
        case "New":
          setFilteredExpenses(expenseList.sort(function(a,b){
            return new Date(b.dateValue) - new Date(a.dateValue)
          }));
          break;
        case "Old":
          setFilteredExpenses(expenseList.sort(function(a,b){
            return new Date(a.dateValue) - new Date(b.dateValue)
          }))
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

    //Calculate total function. Maps through each amountValue in expenseList then adds all values together

    const totalHandler = () => {
      var test = expenseList.map(x => x.amountValue);
      var sum = test.reduce(function(a, b){
        return Number(a) + Number(b);
      }, 0);
      setTotal(sum);
    }

  //Main 

    return (
      <div className="App">

        {/* Form where user inputs expenses */}

        <Form 
        expenseName={expenseName} setExpenseName={setExpenseName}
        amount={amount} setAmount={setAmount} 
        category={category} setCategory={setCategory}
        date={date} setDate={setDate}
        expenseList={expenseList} setExpenseList={setExpenseList}
        setTotal={setTotal}
        total={total}
        />

        {/* Filter component that allows user to filter out list */}

        <Filter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} nameFilter={nameFilter} setNameFilter={setNameFilter} setFilteredExpenses={setFilteredExpenses} expenseList={expenseList} setDateSort={setDateSort} dateSort={dateSort} setExpenseList={setExpenseList}/>

        {/* Expense list component that outputs the inputted data into a table */}

        <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} filteredExpenses={filteredExpenses}/>

        {/* Total component renders total of all expenses */}

        <Total total={total}/>

      </div>
    );
}

export default App;
