import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = (props) => (
    <div className= 'Contact'>

        <img className= 'avatar' src = {props.avatar} alt=''/>

        <div>
            <h4 className= 'name'>{props.name}</h4>
            <div className= 'status'>
                <div className= {props.online === true ? 'status-online' : 'status-offline'}></div>
                <p className='status-text'>{props.online === true? 'online' : 'offline' }</p>
            </div>
        </div>
           
    </div>
)

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export default Contact;