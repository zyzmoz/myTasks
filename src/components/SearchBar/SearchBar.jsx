import React, { Component } from 'react';
import './search-bar.css';
import SearchInput from '../../Util/SearchInput/SearchInput';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <div className="content">        
          <SearchInput />
        </div>
      </div>
    );
  }
}

export default SearchBar;