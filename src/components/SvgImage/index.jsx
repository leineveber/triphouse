import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SvgImage = ({ className, href, xlinkHref }) => {
  if (href) {
    return (
      <Link to={href}>
        <svg className={className}>
          <use xlinkHref={xlinkHref} />
        </svg>
      </Link>
    );
  }

  return (
    <svg className={className}>
      <use xlinkHref={xlinkHref} />
    </svg>
  );
};

SvgImage.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  xlinkHref: PropTypes.string.isRequired,
};

SvgImage.defaultProps = {
  className: '',
  href: '',
};

export default SvgImage;
