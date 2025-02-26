import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isAuthenticated, onLogout }) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          {isAuthenticated ? (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/map">Map</Link></li>
              <li><button onClick={onLogout} className="logout-btn">Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
