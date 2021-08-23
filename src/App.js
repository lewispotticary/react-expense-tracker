import React from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Form /> {/* Form where user inputs expenses */}
      <Filter />
    </div>
  );
}

export default App;
