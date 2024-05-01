import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
