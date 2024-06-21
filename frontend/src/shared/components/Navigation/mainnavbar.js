import React from 'react';
import './mainnavbar.css'; // Import the CSS file for styling
import { Link,useLocation } from 'react-router-dom';
import logo from './Online-shopping-logo-design-template-on-transparent-background-PNG.png'

function Navbar() {
    const location = useLocation();
    
    const isRouteActive = (route) => location.pathname === route;
    console.log('Current Path:');
  return (
    <nav className="navbar">
    
    <div className="header">
        <div className="logo">
          <img src={logo} alt="Classic Kitchens Logo" style={{ width: '150px', height: '100px' }} />
        </div>
        <div className="title">
          <h1 className="website-title">Dummy Market</h1>
          <div className="tagline">
          <h2>Shopping Solution</h2>
          </div>
        </div>
    
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/services">Services</Link>
      <Link to="/login">Logout</Link>
      <Link to="/about" className={isRouteActive('/about') ? 'active' : ''}>About</Link>
      
      </div>
    </nav>
  );
}

export default Navbar;
