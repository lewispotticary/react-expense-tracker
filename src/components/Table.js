import React from 'react';

function Table (){
    return(
        <div className="tableContainer">

            <table>
                <tr>
                    <th>Expense Name</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </table>

            <h3>Total:</h3>

        </div>
    )
}

export default Table;