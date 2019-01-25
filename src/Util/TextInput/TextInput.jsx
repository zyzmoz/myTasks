import React from 'react';
import * as Icon from 'react-feather';

const TextInput = ({value, event, change, placeholder = '', field}) => {
  return (
    <div className="input">
      <input value={value} type="text" placeholder={placeholder} onChange={e => change(field,e.target.value)} />      
    </div>
  );
};

export default TextInput;