import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

const FormDestination = ({ onChange, value }) => (
  <div className="form__item">
    <Input
      className="form__input"
      labelClassName="form__label"
      labelText="Your destination or hotel name"
      type="text"
      name="city"
      id="city"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

FormDestination.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormDestination;
