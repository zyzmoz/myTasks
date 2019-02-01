import React from 'react';
import { connect } from 'react-redux';

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
      return authenticated ? <Component /> : <div>Unauthorized Access</div>
    }
  }
  return connect(mapState)(AuthHOC);
}