import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import ExpenseList from './components/ExpenseList';
import Total from './components/Total'
import Chart from './components/Chart'

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

    const [dateSort, setDateSort] = useState("None");

    //Total State

    const [total, setTotal] = useState("");

    //Bills total state

    const [billTotal, setBillTotal] = useState("");

    //Entertainment value state

    const [entertainmentTotal, setEntertainmentTotal] = useState("");

    //Food total state

    const [foodTotal, setFoodTotal] = useState("");

    //Travel total state

    const [travelTotal, setTravelTotal] = useState("");

    //Miscellaneous total state

    const [miscellaneouslTotal, setMiscellaneousTotal] = useState("");

  //Use Effect

    //Category filter useEffect

    useEffect(() => {
      dateSortHandler();
    },[dateSort]);

    useEffect(() => {
      categoryFilterHandler();
    },[categoryFilter]);

    //Name Filter and total useEffect
    
    useEffect(() => {
      nameFilterHandler();
    },[expenseList,nameFilter]);

    //Date Filter useEffect

  //Functions

  //Date sort function

//Miscellaneous total state


  const dateSortHandler = () => {
    switch(dateSort){
      case "New":
        var filterByNew = expenseList.sort(function(a,b){return new Date(b.dateValue) - new Date(a.dateValue)});
        setFilteredExpenses([...filterByNew]);
        break;
      case "Old":
        var filterByOld = expenseList.sort(function(a,b){return new Date(a.dateValue) - new Date(b.dateValue)})
        setFilteredExpenses([...filterByOld]);
        break;
      default:
        setFilteredExpenses(expenseList);
        break;
    }

  }

    //Category Filter function

    const categoryFilterHandler = () => {
      switch(categoryFilter){
        case "Bills":
          console.log("bills");
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

    //Calculate total function. Maps through each amountValue in expenseList then adds all values together


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

        <Filter 
        categoryFilter={categoryFilter} 
        setCategoryFilter={setCategoryFilter} 
        nameFilter={nameFilter} 
        setNameFilter={setNameFilter} 
        setFilteredExpenses={setFilteredExpenses} 
        expenseList={expenseList} 
        setDateSort={setDateSort} 
        dateSort={dateSort} 
        setExpenseList={setExpenseList}
        />

        {/* Expense list component that outputs the inputted data into a table */}

        <ExpenseList 
        expenseList={expenseList} 
        setExpenseList={setExpenseList} 
        filteredExpenses={filteredExpenses}
        />

        {/* Total component renders total of all expenses */}

        <Total 
        total={total} 
        expenseList={expenseList} 
        setTotal={setTotal} 
        setBillTotal={setBillTotal} 
        setEntertainmentTotal={setEntertainmentTotal} 
        setFoodTotal={setFoodTotal}
        setTravelTotal={setTravelTotal}
        setMiscellaneousTotal={setMiscellaneousTotal}
        />

        <Chart 
        billTotal={billTotal} 
        entertainmentTotal={entertainmentTotal} 
        foodTotal={foodTotal}
        travelTotal={travelTotal}
        miscellaneouslTotal={miscellaneouslTotal}
        />

      </div>
    );
}

export default App;
