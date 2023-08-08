import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Main } from './pages';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter> */}
      <Main />
    </div>
  );
}

export default App;
