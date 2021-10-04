import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Total = ({total, expenseList, setTotal, setBillTotal, setEntertainmentTotal, setFoodTotal, setTravelTotal, setMiscellaneousTotal}) => {


    const totalHandler = () => {

        //Total Function
        var test = expenseList.map(x => x.amountValue);
        var sum = test.reduce(function(a, b){
          return Number(a) + Number(b);
        }, 0);
        setTotal(sum);
  
        //Bill total function
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

    useEffect(() => {
        totalHandler();
    },[expenseList]);



    return (
        <div class="container">
            <h4>Total: {total}</h4>
        </div>
    )
}

export default Total;



