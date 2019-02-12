import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../util/TextInput/TextInput';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import './register.css';

const mapState = (state) => ({
  auth: state.auth
});

const actions = {
  register
}


class Register extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      username: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  doRegister = () => {
    const { name, lastname, email, password, username } = this.state;
    const newUser = { name, lastname, email, password, username };    
    this.props.register(newUser);
    this.props.history.goBack();
  }

  render() {
    let {
      name,
      lastname,
      email,
      password,
      passwordConfirmation,
      username,
    } = this.state;
    return (
      <div className="register">
        <div className="form">
          <h3>Register new Account</h3>
          <TextInput
            onChange={this.handleChange} value={name} name="name" 
            placeholder="Name" label="Name" />
          <TextInput
            onChange={this.handleChange} value={lastname} name="lastname"
            placeholder="Last Name" label="Last Name" />
          <TextInput
            onChange={this.handleChange} value={email} name="email"
            placeholder="Email" label="Email" />
          <TextInput
            onChange={this.handleChange} value={username} name="username"
            placeholder="Username" label="Username" />
          <TextInput
            onChange={this.handleChange} value={password} name="password"
            placeholder="Password" label="Password" type="password" />
          <TextInput
            onChange={this.handleChange} value={passwordConfirmation} name="passwordConfirmation"
            placeholder="Password Confirmation" label="Password Confirmation" type="password" />
          <button
            onClick={() => this.doRegister()}
            disabled={!username || username.length == 0 || !email || email.length == 0 || !password || password.length == 0 || (password !== passwordConfirmation)}
            className="btn primary">Save</button>
          <Link className="btn danger" to="login">Cancel</Link>

        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(Register);