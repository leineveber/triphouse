import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../Image';
import SvgImage from '../SvgImage';

import './Card.styles.scss';

const Card = ({ src, alt, href, xlinkHref, linkText, descText }) => (
  <div className="row__card">
    <div className="row__card-image-wrapper">
      {src && <Image className="row__card-image" href={href} src={src} alt={alt} />}
      {xlinkHref && <SvgImage className="row__card-image" xlinkHref={xlinkHref} />}
    </div>
    {linkText && (
      <Link className="row__card-link" to={href}>
        {linkText}
      </Link>
    )}
    {descText && <p className="row__card-description">{descText}</p>}
  </div>
);

Card.propTypes = {
  src: PropTypes.string,
  xlinkHref: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  linkText: PropTypes.string,
  descText: PropTypes.string,
};

Card.defaultProps = {
  src: '',
  alt: '',
  xlinkHref: '',
  href: '/',
  linkText: '',
  descText: '',
};

export default Card;
