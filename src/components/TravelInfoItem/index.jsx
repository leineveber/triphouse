import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { decrease, increase, removeChildren } from '../../redux/slices/travelInfo';

import Button from '../Button';

import './TravelInfoItem.styles.scss';

const TravelInfoItem = ({ label, maxNumber }) => {
  const dispatch = useDispatch();
  const type = label.toLowerCase();
  const number = useSelector((state) => state.rootReducer.travelInfo[type]);

  const handleDecrease = () => {
    dispatch(decrease(type));

    if (type === 'children') {
      dispatch(removeChildren());
    }
  };

  const handleIncrease = () => {
    dispatch(increase(type));
  };

  return (
    <div className="travel-info__item">
      <span className="travel-info__label">{label}</span>
      <div className="travel-info__buttons">
        <Button
          className={classNames('travel-info__button', {
            'travel-info__button--active': number > 0,
          })}
          text="-"
          onClick={handleDecrease}
          disabled={number <= 0}
        />
        <span className="travel-info__number">{number}</span>
        <Button
          className={classNames('travel-info__button', {
            'travel-info__button--active': number < maxNumber,
          })}
          text="+"
          onClick={handleIncrease}
          disabled={number >= maxNumber}
        />
      </div>
    </div>
  );
};

TravelInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  maxNumber: PropTypes.number.isRequired,
};

export default TravelInfoItem;
