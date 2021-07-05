import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className,
  labelClassName,
  labelText,
  type,
  name,
  id,
  readOnly,
  required,
  value,
  onChange,
  onClick,
}) => (
  <>
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      readOnly={readOnly}
      required={required}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
    {labelText && (
      <label className={labelClassName} htmlFor={id}>
        {labelText}
      </label>
    )}
  </>
);

Input.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  labelClassName: '',
  labelText: '',
  readOnly: false,
  required: false,
  value: '',
  onChange: () => {},
  onClick: () => {},
};

export default Input;
