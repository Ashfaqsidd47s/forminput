import React, { useState } from 'react';
import "./formInput.scss";

function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const {label,errorMessage, onChange, id, ...inputProps } = props; //by this way we can select all the remaining properties form teh props object 
  return (
    <div className='formInput'>
        <label htmlFor="inputItem">{label}</label>
        <input 
            id='inputItem'
            {...inputProps}
            onChange={onChange}
            onBlur={(e)=> setFocused(true)}
            focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput