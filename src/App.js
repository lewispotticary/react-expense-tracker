import React from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Form /> {/* Form where user inputs expenses */}
      <Filter />
      <Table />
    </div>
  );
}

export default App;
