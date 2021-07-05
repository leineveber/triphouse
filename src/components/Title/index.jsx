import React from 'react';
import PropTypes from 'prop-types';

import './Title.styles.scss';

const Title = ({ className, text }) => <h2 className={`${className} title`}>{text}</h2>;

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  className: '',
};

export default Title;
