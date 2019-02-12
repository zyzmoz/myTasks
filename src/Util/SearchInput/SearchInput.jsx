import React from 'react';
import * as Icon from 'react-feather';

const SearchInput = ({value, event, onChange}) => {
  return (
    <div className="input search">
      <input value={value} type="text" placeholder="Search" onChange={e => onChange(e.target.value)} />
      <button onClick={() => event(value)}>
        <Icon.Search />
      </button>
    </div>
  );
};

export default SearchInput;