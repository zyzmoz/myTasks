import React from 'react';
import * as Icon from 'react-feather';

const TextInput = ({value, event, change, placeholder = '', label, type, name}) => {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input value={value} type={type || 'text'} name={name} placeholder={placeholder} onChange={e => change(e)} />      
    </div>
  );
};

export default TextInput;