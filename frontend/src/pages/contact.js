// import React from 'react';
// import './contact.css'
// import ContactForm from '../components/form';


// function contact(){
//     return(
//         <div className="contact">
//            <div>
//            <ContactForm/>
            
//            </div>
//         </div>
//     );
// }

// export default contact;

import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setErrorMessage('');
      } else {
        setSubmitSuccess(false);
        setErrorMessage(data.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitSuccess(false);
      setErrorMessage('Failed to send message');
    }
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
        <button type="submit">Send Message</button>
      </form>
      {submitSuccess && <p className="success-message">Message sent</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Contact;
