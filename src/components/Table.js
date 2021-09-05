import React from 'react';

function Table ({expenseName, amountValue, categoryValue, dateValue}){
    return(
            <tr>
                <td>{expenseName}</td>
                <td>{amountValue}</td>
                <td>{categoryValue}</td>
                <td>{dateValue}</td>
            </tr>
    )
}

export default Table;