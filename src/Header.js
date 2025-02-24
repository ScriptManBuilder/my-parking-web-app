import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/login">Login Page</Link></li>
          <li><Link to="/home">Home Page</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;