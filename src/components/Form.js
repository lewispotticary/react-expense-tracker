import React from 'react';

function Form ({expenseName, setExpenseName, amount, setAmount, category, setCategory, date, setDate, expenseList, setExpenseList, filteredExpenses}){ //Form where user inputs expenses

    {/*Functions*/}

    {/*Expense Name Prop */}
    const expenseNameHandler = (e) => {
        setExpenseName(e.target.value)
    }

    {/*Amount Prop */}

    const amountHandler = (e) => {
        setAmount(e.target.value)
    }

    {/*Category Prop */}

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }

    {/*Date Prop */}

    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    
    {/*Add expense button function */}

    const submitExpenseHandler = (e) => {
        e.preventDefault();
        setExpenseList([
            ...expenseList, {expenseName: expenseName, amountValue: amount, categoryValue: category, dateValue: date, id: Math.random() * 1000}
        ])
        setExpenseName("");
        setAmount("");
        setCategory("Bills");
        setDate("");
    }


    return(
        <div className="formContainer">

            {/*Expense Name Container*/}
            <div className="expenseName">
                <h3>Expense Name</h3>
                <input type="text" value={expenseName} onChange={expenseNameHandler}/>
            </div>

            {/*Amount Container*/}
            <div className="amount">
                <h3>Amount</h3>
                <input type="text" value={amount} onChange={amountHandler}/>
            </div>

            {/*Category Container*/}
            <div className="category">
                <h3>Category</h3>
                <select id="cars" name="cars" value={category} onChange={categoryHandler}>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>

            {/*Date Container*/}
            <div className="date">
                <h3>Date</h3>
                <input type="date" value={date} onChange={dateHandler} />
            </div>

            <div className="lineBreak"></div>

            <div className="expenseBtnCotainer">
                <button className="expenseBtn" onClick={submitExpenseHandler}>Add Expense</button>
            </div>

        </div>
    );
}

export default Form;