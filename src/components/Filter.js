import React from 'react';

function Filter ({categoryFilter, setCategoryFilter, setNameFilter, dateSort, setDateSort, setExpenseList}) {

    //Functions

        //Set category filter state to event value

        const categoryFilterHandler = (e) => {
            setCategoryFilter(e.target.value)
        }

        //Set name filter state to event value

        const nameFilterSet = (e) => {
            setNameFilter(e.target.value);
        }

        //Reset function that sets the state of category and name filter to empty

        const resetHandler = () => {
            setCategoryFilter("");
            setNameFilter("");
        }

        //Set date sort state to event value

        const dateSortHandler = (e) => {
            setDateSort(e.target.value);
        }

        //Clear expense list when clear button clicked

        const clearHandler = () => {
            setExpenseList([]);
        }

    //Main - Returns HTML

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

                <div className="dateSort">
                    <h3>Date</h3>
                    <select id="cars" name="cars" value={dateSort} onChange={dateSortHandler}>
                        <option value="New">Date (Newest)</option>
                        <option value="Old">Date (Oldest)</option>
                    </select>
                </div>

                <button className="resetBtn" onClick={resetHandler}>Reset</button>

                <button className="clearBtn" onClick={clearHandler}>Clear</button>
            </div>
        )
}

export default Filter;