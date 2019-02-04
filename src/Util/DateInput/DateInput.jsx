import React from 'react';
import * as Icon from 'react-feather';


const DateInput = ({value, event, onChange, placeholder = '', name, label}) => {  
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input id="dte" type="date" placeholder={placeholder} name={name} onChange={e => onChange(e)} value={value}  />      
    </div>
  );
};

export default DateInput;