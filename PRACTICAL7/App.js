import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pra7/Menu';
import Colleges from './pra7/Colleges';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/colleges" element={<Colleges />} />
      </Routes>
    </Router>
  );
}

export default App;
