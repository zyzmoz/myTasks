import React from 'react';
import * as Icon from 'react-feather';


const DateInput = ({value, event, change, placeholder = '', field}) => {  
  return (
    <div className="input">
      <input id="dte" type="date" placeholder={placeholder} onChange={e => change(field, e.target.value)} value={value}  />      
    </div>
  );
};

export default DateInput;