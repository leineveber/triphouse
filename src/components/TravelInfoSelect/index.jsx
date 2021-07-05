import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

import TravelInfoSelectItem from '../TravelInfoSelectItem';

import './TravelInfoSelect.styles.scss';

const TravelInfoSelect = ({ childrens }) => {
  if (childrens > 0) {
    const renderSelectItems = useMemo(() => {
      const items = [];
      let startNumber = 0;

      for (let i = 0; i < childrens; i += 1) {
        items.push(<TravelInfoSelectItem id={(startNumber += 1)} key={nanoid()} />);
      }

      return items;
    }, [childrens]);

    return (
      <div className="travel-info__childrens">
        <p className="travel-info__text">What is the age of the child you’re travelling with?</p>
        <div className="travel-info__select-wrapper">{renderSelectItems}</div>
      </div>
    );
  }

  return null;
};

TravelInfoSelect.propTypes = {
  childrens: PropTypes.number.isRequired,
};

export default TravelInfoSelect;
