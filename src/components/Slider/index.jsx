import React from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';

import './Slider.styles.scss';

SwiperCore.use([Navigation]);

const Slider = ({ children }) => (
  <Swiper
    spaceBetween={16}
    navigation
    breakpoints={{
      769: {
        slidesPerView: 4,
      },
      426: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }}
  >
    {children}
  </Swiper>
);

Slider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Slider;
