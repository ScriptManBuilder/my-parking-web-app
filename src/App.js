// src/App.js
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainPage from './mainPage';
import Header from './Header';
import MapPage from './MapPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (username) => {
    console.log(`User ${username} logged in`);
    navigate('/home');
  };

  return <LoginForm onLogin={handleLogin} />;
}

export default App;