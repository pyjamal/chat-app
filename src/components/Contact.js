import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

/*const Contact = (props) => (
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
}*/

class Contact extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                online: props.online,
            }
        }
        render () {
            return (
                <div className= 'Contact'>
    
                <img className= 'avatar' src = {this.props.avatar} alt=''/>
        
                <div>
                    <h4 className= 'name'>{this.props.name}</h4>
                    <div className= 'status'>
                        <div className= {this.state.online === true ? 'status-online' : 'status-offline'}
                        onClick={event => {const newOnline = !this.state.online;
                                           this.setState({online : newOnline})}}></div>
                        <p className='status-text'>{this.state.online === true? 'online' : 'offline' }</p>
                    </div>
                </div>
                   
                </div>
            )
        }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}
    
    


export default Contact;