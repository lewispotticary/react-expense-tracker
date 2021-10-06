import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Filter ({categoryFilter, setCategoryFilter, setNameFilter, dateSort, setDateSort, setExpenseList, expenseList, setFilteredExpenses}) {

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
            setDateSort("");
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
            <div class="container">

                <hr />

                <div class="d-flex flex-row justify-content-start">

                    <div class="row">

                        <div class="col">
                                <div className="nameFilter">
                                    <h5>Name</h5>
                                    <input class="form-control" type="text" onChange={nameFilterSet}/>
                                </div>
                        </div>

                        <div class="col">
                            <h5>Category</h5>
                            <select class="form-select" id="cars" name="cars" value={categoryFilter} onChange={categoryFilterHandler}>
                                <option value="All">All</option>
                                <option value="Bills">Bills</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                            </select>
                        </div>

                        <div class="col">
                            <h5>Date Sort</h5>
                            <select class="form-select" id="cars" name="cars" value={dateSort} onChange={dateSortHandler}>
                                <option value="None">None</option>
                                <option value="New">Date (Newest)</option>
                                <option value="Old">Date (Oldest)</option>
                            </select>
                        </div>

                        <div class="col">
                            <h5>&nbsp;</h5>
                            <div class="btn-group btn-outline-primary">
                                <button class="btn btn-outline-primary" onClick={resetHandler}>Reset</button>
                                <button class="btn btn-outline-primary" onClick={clearHandler}>Clear</button>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        )
}

export default Filter;