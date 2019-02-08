import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextInput from '../../util/TextInput/TextInput';
import './login.css';
import { login } from '../../actions/auth';

const mapState = (state) => ({
  auth: state.auth
});

const actions = {
  login
}

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  render() {
    let { username, password} = this.state;
    const { message } = this.props.auth;
    
    return (
      <div className="login">
        <div className="form">
          <h3>Login</h3>
          <TextInput placeholder="Username" label="Username" onChange={this.handleChange} name="username"/>
          <TextInput placeholder="Password" label="Password" type="password" onChange={this.handleChange} name="password" />
          {message && <div className="error">{message}</div>}
          <button onClick={() => this.props.login(username, password)} className="btn primary">Login</button>
          <Link className="btn link" to="register">Registrar</Link>
        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(Login);