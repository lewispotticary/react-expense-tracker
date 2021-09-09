import React from 'react';
import Table from './Table';

const ExpenseList = ({expenseList, setExpenseList, filteredExpenses}) => {
    return(
        <table>
        <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
        </tr> 
            {filteredExpenses.map(expenseObject => (
                        <Table expenseName={expenseObject.expenseName} amountValue={expenseObject.amountValue} categoryValue={expenseObject.categoryValue} 
                        dateValue={expenseObject.dateValue} expenseList={expenseList} setExpenseList={setExpenseList} expenseObject={expenseObject} id={expenseObject.id}/>
                    ))}
        </table>       
    );
}

export default ExpenseList;