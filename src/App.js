import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/shared/Home/Header/Header';
import Home from './pages/shared/Home/Home';

const App = () => {
  return (
    <div className="font-serif">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
