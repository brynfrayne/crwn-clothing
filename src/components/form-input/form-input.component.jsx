import React from 'react';
import './form-input.styles.scss';

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className='group'>
        <input className='form-input' {...otherProps} />
        {label && (
        <label 
        className={`${
            otherProps.value.length ? 'shrik' : ''
        } form-input-label`}
        >{label}
        </label>
        )}
    </div>

    
  )
}
