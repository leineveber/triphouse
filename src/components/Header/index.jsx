import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import SvgImage from '../SvgImage';
import Button from '../Button';
import Spoiler from '../Spoiler';

import useScreenWidth from '../../hooks/useScreenWidth';

import './Header.styles.scss';

const Header = ({ className }) => {
  const isPC = useScreenWidth();

  return (
    <header className={`${className} header`}>
      <SvgImage className="header__logo" xlinkHref="#logo-icon" href="/" />
      <nav className="header__nav">
        <Link className="header__nav-item header__nav-item--active" to="/">
          Stays
        </Link>
        <Link className="header__nav-item header__nav-item--active" to="/">
          Attractions
        </Link>
        <Button className="header__nav-item">
          <SvgImage className="header__theme" xlinkHref="#theme-icon" />
        </Button>
        <Link to="/signup" className="header__nav-item">
          <SvgImage className="header__account" xlinkHref="#account-icon" />
        </Link>
        {!isPC && (
          <Spoiler
            className="header__nav-burger"
            buttonClassName="burger"
            buttonText={
              <>
                <span className="burger__line" />
                <span className="burger__line" />
                <span className="burger__line" />
              </>
            }
          >
            <Link className="header__nav-item spoiler__item" to="/">
              Stays
            </Link>
            <Link className="header__nav-item spoiler__item" to="/">
              Attractions
            </Link>
          </Spoiler>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
