import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthentication = (Component) => {
  const mapState = (state) => ({
    auth: state.auth
  });
  class AuthHOC extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { authenticated } = this.props.auth;        
      return authenticated ? <Component /> : <Redirect to="/login" />
    }
  }
  return connect(mapState)(AuthHOC);
}