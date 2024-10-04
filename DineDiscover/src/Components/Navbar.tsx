import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  onLoginClick: () => void;  // Add a prop for handling login click
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <img src="/Images/logo.png" alt="Dine Discover Logo" />
          </Link>
        </div>
        <button className="login-button" onClick={onLoginClick}>Login</button> 
      </div>
      <ul className="nav-links">
      <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/cafes">Cafes</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/Special">Special</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
