import React from 'react';
import * as Icon from 'react-feather';

const DateInput = ({value, event, change, placeholder = ''}) => {
  return (
    <div className="input">
      <input value={value} type="date" placeholder={placeholder} onChange={e => change(e.target.value)} />      
    </div>
  );
};

export default DateInput;