import React from 'react';

function Form (){ //Form where user inputs expenses
    return(
        <div className="formContainer">

            {/*Expense Name Container*/}
            <div className="expenseName">
                <h3>Expense Name</h3>
                <input type="text" />
            </div>

            {/*Amount Container*/}
            <div className="amount">
                <h3>Amount</h3>
                <input type="text" />
            </div>

            {/*Category Container*/}
            <div className="category">
                <h3>Category</h3>
                <select id="cars" name="cars">
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
                <input type="date" />
            </div>

            <div className="lineBreak"></div>

            <div className="expenseBtnCotainer">
                <button className="expenseBtn">Add Expense</button>
            </div>

        </div>
    );
}

export default Form;