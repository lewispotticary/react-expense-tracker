import React from 'react';
import Table from './Table';

const ExpenseList = ({expenseList}) => {
    return(
        <div className="expenseList">
                    {expenseList.map(expenseObject => (
                        <Table expenseName={<td>{expenseObject.expenseName}</td>} amountValue={<td>{expenseObject.amountValue}</td>} id={expenseObject.id}/>
                    ))}
        </div>
    );
}

export default ExpenseList;