
import React from 'react';
import './App.css';
import Weather from './Components/weather';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <Weather />
      </main>
    </div>
  );
};

export default App;
