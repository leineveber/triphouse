import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TravelInfoItem from '../TravelInfoItem';
import TravelInfoSelect from '../TravelInfoSelect';

import useScreenWidth from '../../hooks/useScreenWidth';

import './TravelInfo.styles.scss';

const TravelInfo = ({ isClicked, className }) => {
  const childrens = useSelector((state) => state.rootReducer.travelInfo.children);
  const isPC = useScreenWidth();

  if (isClicked && isPC) {
    return (
      <div className={`${className} travel-info`}>
        <TravelInfoItem label="Adults" maxNumber={30} />
        <TravelInfoItem label="Children" maxNumber={10} />
        <TravelInfoItem label="Rooms" maxNumber={30} />
        <TravelInfoSelect childrens={childrens} />
      </div>
    );
  }

  return null;
};

TravelInfo.propTypes = {
  isClicked: PropTypes.bool,
  className: PropTypes.string,
};

TravelInfo.defaultProps = {
  isClicked: false,
  className: '',
};

export default TravelInfo;
