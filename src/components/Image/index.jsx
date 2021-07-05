import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Image = ({ className, href, src, alt }) => {
  if (href) {
    return (
      <Link to={href}>
        <img className={className} src={src} alt={alt} />
      </Link>
    );
  }

  return <img className={className} src={src} alt={alt} />;
};

Image.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
  href: '',
};

export default Image;
