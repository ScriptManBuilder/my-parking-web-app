

import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const correctLogin = 'admin';     // Задаем правильный логин
  const correctPassword = '12345';  // Задаем правильный пароль
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === correctLogin && password === correctPassword) {
      alert(`Welcome, ${login}!`);
      onLogin(); // Переход на домашнюю страницу
    } else {
      setError('Invalid login or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>Login</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
