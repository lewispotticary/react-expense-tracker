import React from 'react';

function Table ({expenseName, amountValue, categoryValue, dateValue, setExpenseList, expenseList, id, expenseObject}){

    const deleteHandler = () => {
        setExpenseList(expenseList.filter(el => el.id !== expenseObject.id))
    };

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