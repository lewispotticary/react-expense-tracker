import React from "react";

//Import of bootrap 

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

//The form function renders out the form where the user enter details of the expense

function Form ({expenseName, setExpenseName, amount, setAmount, category, setCategory, date, setDate, expenseList, setExpenseList}){

    //Functions

        //Expense Name Prop

        const expenseNameHandler = (e) => {
            setExpenseName(e.target.value)
        }

        //Amount Prop

        const amountHandler = (e) => {
            setAmount(e.target.value)
        }

        //Category Prop

        const categoryHandler = (e) => {
            setCategory(e.target.value)
        }

        //Date Prop

        const dateHandler = (e) => {
            setDate(e.target.value)
        }     

        //Add expense button function. Create a class with form data and store into set expense list state. 

        const submitExpenseHandler = (e) => {
            e.preventDefault();
            setExpenseList([
                ...expenseList, {
                    expenseName: expenseName, 
                    amountValue: amount, 
                    categoryValue: category, 
                    dateValue: date, 
                    id: Math.random() * 1000}
            ])
            setExpenseName("");
            setAmount("");   
            setDate("");
        }

    //Main   

        return(
            <div>

                <div class="container-fluid p-3 mb-2 bg-dark text-white mb-4">
                    <div class="d-flex flex-row justify-content-center mb-1 mt-1">
                        <h1>Expense Tracker</h1>
                    </div> 
                </div>


                <div class="container">

                    <div class="d-flex flex-row justify-content-start mb-4">
                        
                        <div class="row">

                            {/*Expense Name Container*/}

                            <div class="col">
                                <h4>Expense</h4>
                                <input class="form-control" type="text" value={expenseName} onChange={expenseNameHandler}/>
                            </div>

                            {/*Amount Container*/}

                            <div class="col">
                                <h4>Amount</h4>
                                <input class="form-control" type="text" value={amount} onChange={amountHandler}/>
                            </div>

                            {/*Category Container*/}

                            <div class="col">
                                <h4>Category</h4>
                                <select class="form-select" id="cars" name="cars" value={category} onChange={categoryHandler}>
                                    <option value="Bills">Bills</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                </select>
                            </div>

                            {/*Date Container*/}
                            
                            <div class="col">
                                <h4>Date</h4>
                                <input class="form-control" type="date" value={date} onChange={dateHandler} />
                            </div>

                            <div class="col">
                                <h4>&nbsp;</h4>
                                <Button onClick={submitExpenseHandler}>Add Expense</Button>
                            </div>

                        </div>

                        <hr></hr>

                    </div>

                </div>
            </div>
        );
}

export default Form;