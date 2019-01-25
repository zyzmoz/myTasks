import React, { Component } from 'react';
import './search-bar.css';
import SearchInput from '../../Util/SearchInput/SearchInput';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  query = () => {
    console.log(this.state.query);
  }

  updateField = (value) => {
    this.setState({ query: value });
  }

  render() {
    let { query } = this.state;
    return (
      <div className="search-bar">
        <div className="content">
          <SearchInput value={query} change={this.updateField} event={this.query} />
        </div>
      </div>
    );
  }
}

export default SearchBar;