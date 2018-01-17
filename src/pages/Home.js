import React, { Component } from 'react';
import { Intent, Callout, Button } from "@blueprintjs/core";

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      click: 0
    }
  }
  render(){
    let msg = "";
    if (this.state.click > 0)
      msg = "Click count: " + this.state.click;

    return(
      <div className="grid-container">
        <Callout intent={Intent.PRIMARY}>
          <h2>Hello World</h2>
        </Callout>
        <p>{msg}</p>
        <Button onClick={() => this.setState({click: this.state.click + 1})} intent={Intent.SECONDARY}>Here</Button>
      </div>
    );
  }
}

export default HomePage;
