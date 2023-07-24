import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Admin from './components/Admin';
import Staff from './components/Staff';
import Register from './components/Register'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;
