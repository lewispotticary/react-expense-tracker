import React, {useEffect} from 'react';

function Filter ({categoryFilter, setCategoryFilter, nameFilter, setNameFilter, setFilteredExpenses, expenseList}) {

    /*put use effect for name in app.js*/

    const categoryFilterHandler = (e) => {
        setCategoryFilter(e.target.value)
    }

    const nameFilterSet = (e) => {
        setNameFilter(e.target.value);
    }

    const resetHandler = () => {
        setCategoryFilter("");
        setNameFilter("");
    }

    return(
        <div className="filterContainer">

            <div className="nameFilter">
                <h3>Name</h3>
                <input type="text" onChange={nameFilterSet}/>
            </div>

            <div className="categoryFilter">
                <h3>Category</h3>
                <select id="cars" name="cars" value={categoryFilter} onChange={categoryFilterHandler}>
                    <option value="All">All</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>

            <button className="resetBtn" onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Filter;