import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../Section';
import SvgImage from '../SvgImage';

import useScreenWidth from '../../hooks/useScreenWidth';

import footerData from '../../constants/footerData';

import './Footer.styles.scss';

const Footer = () => {
  const isPC = useScreenWidth();

  return (
    <footer>
      <Section className="footer-section">
        {!isPC && <SvgImage className="footer-section__logo" xlinkHref="#logo-icon" />}
        <nav className="row">
          {footerData.map((list) => (
            <ul key={list.id} className="footer-section__list">
              {list.data.map((item) => (
                <li key={item.id} className="footer-section__list-item">
                  <Link to="/">{item.name}</Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
        <p className="footer-section__copyright">© 2020 Triphouse, Inc. All rights reserved</p>
      </Section>
    </footer>
  );
};

export default Footer;
