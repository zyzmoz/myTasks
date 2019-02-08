import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginWithId } from '../actions/auth';

export const withAuthentication = (Component) => {
  const mapState = (state) => ({
    auth: state.auth
  });

  const actions = {
    loginWithId
  }

  class AuthHOC extends React.Component {
    constructor(props) {
      super(props);
    }

    
    componentWillMount(){
      const uid = localStorage.getItem("@myTask:currentUser");
      this.props.loginWithId(uid);  
    }

    render() {      
      const { authenticated } = this.props.auth;              
      return authenticated ? <div><Redirect to="/" /><Component /></div> : <Redirect to="/login" />
    }
  }
  return connect(mapState, actions)(AuthHOC);
}