import "./App.css";

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Login} from './Components';
import {Search} from './Components';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const validEmail = "Yashagrawal070@gmail.com";
    const validPassword = "12345";
    if (validEmail.trim() === validEmail && validPassword.trim() === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/search" /> : <Login onLogin={handleLogin}/>} />
        <Route path="/search" element={isLoggedIn ? <Search /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

