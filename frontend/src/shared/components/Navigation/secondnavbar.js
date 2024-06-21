import React from 'react';
import './secondnavbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function SecondNavbar() {
  return (
    <div className="secondnavbar">
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </div>
  );
}

export default SecondNavbar;