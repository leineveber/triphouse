import React from 'react';

import Input from '../Input';

const FormDate = () => (
  <div className="form__item">
    <div className="form__input-wrapper">
      <Input
        className="form__input"
        labelClassName="form__label"
        labelText="Check-in"
        type="text"
        name="date"
        id="date"
        required
      />
    </div>
    <div className="form__input-wrapper">
      <Input
        className="form__input"
        labelClassName="form__label"
        labelText="Check-out"
        type="text"
        name="date"
        id="date"
        required
      />
    </div>
  </div>
);

export default FormDate;
