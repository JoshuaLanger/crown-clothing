import React from 'react';

// Styles
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label
        className={`form-input-label ${props.value.length ? 'shrink' : ''}`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
