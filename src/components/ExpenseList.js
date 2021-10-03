import React from 'react';
import Table from './Table';
import TableBootstrap from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

//Expense list component. Includes HTML Table and maps through expenseList state and passes it to table component where it is rendered. 

const ExpenseList = ({expenseList, setExpenseList, filteredExpenses}) => {
    return(
        <div class="container mt-4">
        <TableBootstrap class="table-dark table-striped">
            <thead>
                <tr class="table-dark fs-5">
                    <th scope="col">Expense</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                </tr>
            </thead>
                {filteredExpenses.map(expenseObject => (
                            <Table expenseName={expenseObject.expenseName} amountValue={expenseObject.amountValue} categoryValue={expenseObject.categoryValue} 
                            dateValue={expenseObject.dateValue} expenseList={expenseList} setExpenseList={setExpenseList} expenseObject={expenseObject} key={expenseObject.id}/>
                ))}
        </TableBootstrap>    
        </div>  
    );
}

export default ExpenseList;