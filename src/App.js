import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Form /> {/* Form where user inputs expenses */}
    </div>
  );
}

export default App;
