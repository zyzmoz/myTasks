import React from 'react';
import * as Icon from 'react-feather';

const TextInput = ({value, event, onChange, placeholder = '', label, type, name}) => {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input value={value} type={type || 'text'} name={name} placeholder={placeholder} onChange={e => onChange(e)} />      
    </div>
  );
};

export default TextInput;