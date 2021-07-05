import React from 'react';
import PropTypes from 'prop-types';

import SvgImage from '../SvgImage';

import './Apps.styles.scss';

const Apps = ({ className }) => (
  <div className={`${className} apps`}>
    <SvgImage className="apps__image" href="/" src="#google-play-icon" />
    <SvgImage className="apps__image" href="/" src="#app-store-icon" />
  </div>
);

Apps.propTypes = {
  className: PropTypes.string,
};

Apps.defaultProps = {
  className: '',
};

export default Apps;
