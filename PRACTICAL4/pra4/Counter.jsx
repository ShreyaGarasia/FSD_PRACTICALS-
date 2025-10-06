import React, { useState } from 'react';
import './Counter.css';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const increment = () => setCount(count + 1);
  const incrementFive = () => setCount(count + 5);
  const decrement = () => setCount(count - 1);


  const reset = () => {
    setCount(0);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Count: <span className="count">{count}</span></h1>

        <div className="button-group">
          <button onClick={reset} className="btn reset">Reset</button>
          <button onClick={increment} className="btn increment">INCREMENT 1</button>
          <button onClick={decrement} className="btn decrement">DECREMENT 1</button>
          <button onClick={incrementFive} className="btn increment5">INCREMENT 5</button>
        </div>

        <h2 className="subtitle">WELCOME TO <span className="highlight">CHARUSAT</span></h2>

        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>

        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>

        <div className="output">
          <p><strong>First Name:</strong> {firstName || '---'}</p>
          <p><strong>Last Name:</strong> {lastName || '---'}</p>
        </div>
      </div>
    </div>
  );
}
