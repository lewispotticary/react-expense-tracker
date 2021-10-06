import React, {useEffect} from 'react'

//Bootrap import

import 'bootstrap/dist/css/bootstrap.min.css'

//Total function calculates the total of all expenses, also the total of expenses in each category

const Total = ({total, expenseList, setTotal, setBillTotal, setEntertainmentTotal, setFoodTotal, setTravelTotal, setMiscellaneousTotal}) => {

    //useEffect - When expense list is changed run totalHandler function

    useEffect(() => {
      totalHandler();
    },[expenseList]);

    const totalHandler = () => {

        //Total Function - Maps through expense list and return all the amountValue objects, then these are added together and setTotal is equal to sum

        var amountObject = expenseList.map(x => x.amountValue);
        var amountSum = amountObject.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0);
        setTotal(amountSum);
  
        //Bill total function - Filters expense list by bills, then maps through result and return all the amountValue objects, then these are added together and setBillTotal is equal to sum
        //This function is repeated for the other categories 

        var bills = expenseList.filter(expense => expense.categoryValue === "Bills");
        var billsArray = bills.map(x => x.amountValue);
        setBillTotal(billsArray.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0));

        //Entertainment total function

        var entertainment = expenseList.filter(expense => expense.categoryValue === "Entertainment");
        var entertainmentArray = entertainment.map(x => x.amountValue);
        setEntertainmentTotal(entertainmentArray.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0));

        //Food total function

        var food = expenseList.filter(expense => expense.categoryValue === "Food");
        var foodArray = food.map(x => x.amountValue);
        setFoodTotal(foodArray.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0));

        //Travel total function

        var travel = expenseList.filter(expense => expense.categoryValue === "Travel");
        var travelArray = travel.map(x => x.amountValue);
        setTravelTotal(travelArray.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0));

        //Miscellaneous total function

        var miscellaneous = expenseList.filter(expense => expense.categoryValue === "Miscellaneous");
        var miscellaneousArray = miscellaneous.map(x => x.amountValue);
        setMiscellaneousTotal(miscellaneousArray.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0));
    }

    //HTML - returns total sum

    return (
        <div class="container">
            <h4>Total: {total}</h4>
        </div>
    )
}

export default Total;



