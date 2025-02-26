import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainPage from './mainPage';
import Header from './Header';
import MapPage from './MapPage';

function App() {
  // Проверяем localStorage при загрузке
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Удаляем флаг аутентификации
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/home" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
          <Route path="/map" element={isAuthenticated ? <MapPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginPage({ onLogin }) {
  return <LoginForm onLogin={onLogin} />;
}

export default App;
