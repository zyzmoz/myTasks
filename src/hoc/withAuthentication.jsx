import React  from 'react';

export const withAuthentication = (Component) => {
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        auth: true
      }
    }
    render() {
      return this.state.auth?<Component />: <div>Unauthorized Access</div>
    }
  }
  
  
  
}