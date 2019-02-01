import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapState = (state) => ({
  auth: state.auth
});

class Login extends Component {
  render() {
    return (
      <div>
        Login
        <Link to="register">Registrar</Link>

      </div>
    );
  }
}

export default Login;