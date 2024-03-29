import React from 'react';

// Styles
import './Button.scss';

const Button = ({ children, ...props }) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default Button;
