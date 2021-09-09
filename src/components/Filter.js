import React from 'react';

function Filter ({categoryFilter, setCategoryFilter}) {

    const categoryFilterHandler = (e) => {
        setCategoryFilter(e.target.value)
    }

    return(
        <div className="filterContainer">

            <div className="nameFilter">
                <h3>Name</h3>
                <input type="text" />
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
            
            <button className="filterBtn">Filter</button>

            <button className="resetBtn">Reset</button>
        </div>
    )
}

export default Filter;