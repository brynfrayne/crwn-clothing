import React from 'react';
import './button.styles.scss';

// 3 types of buttons
//default
//inverted
//google sign in 

const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
} 

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button 
        className={`button-container ${buttonTypeClasses[buttonType]}`}
        {...otherProps}
    >
        {children}
    </button>
  )
}
