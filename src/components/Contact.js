import React from 'react';
import './Contact.css';

const Contact = () => (
    <div className= 'Contact'>

        <img className= 'avatar' src = 'https://randomuser.me/api/portraits/men/77.jpg' alt=''/>

        <div>
            <h4 className= 'name'>Samuel Soto</h4>
            <div className= 'status'>
                <div className= 'status-online'></div>
                <p className='status-text'>online</p>
            </div>
        </div>
           
    </div>
)

export default Contact;