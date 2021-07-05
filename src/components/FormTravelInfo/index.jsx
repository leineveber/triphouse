import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import TravelInfo from '../TravelInfo';
import Input from '../Input';

import useScreenWidth from '../../hooks/useScreenWidth';

const FormTravelInfo = () => {
  const isPC = useScreenWidth();
  const travelInfo = useSelector((state) => state.rootReducer.travelInfo);
  const [isClickedTravelInfo, setClickedTravelInfo] = useState(false);

  const { adults, children, rooms } = travelInfo;

  const handleClickTravelInfo = () => {
    setClickedTravelInfo(!isClickedTravelInfo);
  };

  return (
    <div className="form__item">
      {isPC && (
        <span className="form__label">{`${adults} Adults — ${children} Children — ${rooms} Rooms`}</span>
      )}
      <div className="form__input-wrapper">
        <Input
          className="form__input"
          labelClassName={classNames({ form__label: !isPC })}
          labelText={!isPC ? 'Adults' : ''}
          type="text"
          name="info"
          id="info"
          onClick={isPC ? handleClickTravelInfo : () => {}}
          readOnly={isPC}
          required
        />
      </div>
      <div className="form__input-wrapper">
        <Input
          className="form__input"
          labelClassName={classNames({ form__label: !isPC })}
          labelText={!isPC ? 'Children' : ''}
          type="text"
          name="info"
          id="info"
          onClick={isPC ? handleClickTravelInfo : () => {}}
          readOnly={isPC}
          required
        />
      </div>
      <div className="form__input-wrapper">
        <Input
          className="form__input"
          labelClassName={classNames({ form__label: !isPC })}
          labelText={!isPC ? 'Rooms' : ''}
          type="text"
          name="info"
          id="info"
          onClick={isPC ? handleClickTravelInfo : () => {}}
          readOnly={isPC}
          required
        />
      </div>
      <TravelInfo className="form__travel-info" isClicked={isClickedTravelInfo} />
    </div>
  );
};

export default FormTravelInfo;
