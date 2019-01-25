import React from 'react';
import * as Icon from 'react-feather';

const SearchInput = ({value, event, change}) => {
  return (
    <div className="input search">
      <input value={value} type="text" placeholder="Search" onChange={e => change(e.target.value)} />
      <button onClick={event}>
        <Icon.Search />
      </button>
    </div>
  );
};

export default SearchInput;