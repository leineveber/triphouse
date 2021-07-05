import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addChildren } from '../../redux/slices/travelInfo';

import MAX_CHILDREN_AGE from '../../constants/maxChildrenAge';

const TravelInfoSelectItem = React.memo(({ id }) => {
  const dispatch = useDispatch();

  const renderOptions = () => {
    const options = [];

    for (let i = 1; i <= MAX_CHILDREN_AGE; i += 1) {
      options.push(<option key={nanoid()}>{`${i} years old`}</option>);
    }

    return options;
  };

  const handleSelect = (event) => {
    dispatch(addChildren({ id, age: event.target.value }));
  };

  return (
    <select className="travel-info__select" onChange={handleSelect}>
      {renderOptions()}
    </select>
  );
});

TravelInfoSelectItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TravelInfoSelectItem;
