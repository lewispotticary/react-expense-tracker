import React from 'react';
import Table from './Table';

const ExpenseList = ({expenseList}) => {
    return(
        <table>
        <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
        </tr> 
            {expenseList.map(expenseObject => (
                        <Table expenseName={expenseObject.expenseName} amountValue={expenseObject.amountValue} categoryValue={expenseObject.categoryValue} 
                        dateValue={expenseObject.dateValue} id={expenseObject.id}/>
                    ))}
        </table>        
    );
}

export default ExpenseList;