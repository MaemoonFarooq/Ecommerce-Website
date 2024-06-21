import React, { useState } from 'react';
import './DropdownButton.css';

function DropdownButton() {
    const [isActive, setIsActive] = useState(false);
  
    const toggleDropdown = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className={`dropdown ${isActive ? 'active' : ''}`}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          Dropdown
        </button>
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
    );
  }
  
  export default DropdownButton;
