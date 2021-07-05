import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, disabled, text, isSubmit, onClick, children }) => (
  <button
    className={className}
    type={isSubmit ? 'submit' : 'button'}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Button.defaultProps = {
  className: '',
  disabled: false,
  text: '',
  isSubmit: false,
  onClick: () => {},
  children: '',
};

export default Button;
