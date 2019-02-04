import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../util/TextInput/TextInput';
import './register.css';


class Register extends Component {
  render() {
    return (
      <div className="register">        
        <div className="form">
          <h3>Register new Account</h3>
          <TextInput placeholder="Name" label="Name" />
          <TextInput placeholder="Last Name" label="Last Name" />
          <TextInput placeholder="Email" label="Email" />
          <TextInput placeholder="Username" label="Username" />
          <TextInput placeholder="Password" label="Password" type="password"/>          
          <TextInput placeholder="Password Confirmation" label="Password Confirmation" type="password"/>          
          <button className="btn primary">Save</button>
          <Link className="btn danger" to="login">Cancel</Link>
          
        </div>
      </div>
    );
  }
}

export default Register;