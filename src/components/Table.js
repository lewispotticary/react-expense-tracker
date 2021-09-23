import React from 'react';

function Table ({expenseName, amountValue, categoryValue, dateValue, setExpenseList, expenseList, expenseObject}){

    //Functions

        //Delete function. Filters expense list. If the clicked element id is not equal to object clicked then it is filtered out.

        const deleteHandler = () => {
            setExpenseList(expenseList.filter(el => el.id !== expenseObject.id))
        };

    //Main

        //Mapped data from expense list is passed into new row and columns. 
        
        return(
                <tr>
                    <td>{expenseName}</td>
                    <td>{amountValue}</td>
                    <td>{categoryValue}</td>
                    <td>{dateValue}</td>
                    <td><button onClick={deleteHandler} className="trash-btn"><i className="fa fa-trash fa-lg"></i></button></td>
                </tr>
        )
}

export default Table;