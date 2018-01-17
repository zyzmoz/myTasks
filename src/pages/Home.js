import React, { Component } from 'react';
import { Message, Button } from 'semantic-ui-react';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      click: 0
    }
  }

  sum(a, b){
    return a + b;
  }

  render(){
    let msg = "";
    if (this.state.click > 0)
      msg = "Click count: " + this.state.click;

    return(
      <div className="padding">
      <Message>
        <Message.Header>
          Hello
        </Message.Header>
        <p>
          Clicks: {this.state.click}
        </p>
      </Message>
      <Button primary onClick={() => this.setState({click: this.state.click + 1})}>Click</Button>

      </div>
    );
  }
}

export default HomePage;
