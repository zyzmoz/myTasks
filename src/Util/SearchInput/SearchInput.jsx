import React from 'react';
import * as Icon from 'react-feather';

const SearchInput = () => {
  return (
    <div className="input search wrapper">
      <input type="text" placeholder="Search" />
      <button>
        <Icon.Search />
      </button>
    </div>
  );
};

export default SearchInput;