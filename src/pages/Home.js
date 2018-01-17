import React, { Component } from 'react';
import Foundation,{ Callout, Colors, Button } from 'react-foundation';


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
        <Callout color={Colors.PRIMARY}>
          <h2>Hello World</h2>
        </Callout>
        <p>{msg}</p>
        <Button onClick={() => this.setState({click: this.state.click + 1})} color={Colors.SECONDARY}>Here</Button>
      </div>
    );
  }
}

export default HomePage;
