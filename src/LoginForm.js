import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginForm({ onLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClearFields =()=>{
    setLogin('');
    setPassword('');
  }

  const correctLogin = 'admin';
  const correctPassword = '12345';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === correctLogin && password === correctPassword) {
      localStorage.setItem('isAuthenticated', 'true'); // Сохраняем в localStorage
      onLogin();
      navigate('/home'); // Перенаправление на главную
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
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" class="buttonLogin">Login</button>

        <button onClick={handleClearFields} class="buttonClear">Clear</button> {/* Кнопка для очистки */}


      </form>



    </div>
  );
}

export default LoginForm;
