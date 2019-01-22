import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      click: 0
    }
  }

  sum(a, b) {
    return a + b;
  }

  render() {
    let msg = "";
    if (this.state.click > 0)
      msg = "Click count: " + this.state.click;

    return (
      <div className="page">
        <SearchBar />
        <div className="padding">
          <p>Hello</p>
        </div>


      </div>
    );
  }
}

export default HomePage;
