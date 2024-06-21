import React from 'react';
import './adminpanel.css'
import ContactForm from '../components/form';


function adminpanel(){
    return(
        <div className="contact">
           <div>
           <ContactForm/>
            
           </div>
        </div>
    );
}

export default adminpanel;