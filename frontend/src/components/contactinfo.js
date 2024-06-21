import React from 'react';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Contact Information</h3>
      <div className="info-details">
        <p>Company Name: Your Company Name</p>
        <p>Contact Number: +1 123-456-7890</p>
        <p>Social Media:</p>
        <ul>
          <li>Facebook: @yourcompany</li>
          <li>Twitter: @yourcompany</li>
          <li>Instagram: @yourcompany</li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
