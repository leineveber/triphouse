import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwiperSlide } from 'swiper/react';

import Section from '../Section';
import Title from '../Title';
import Card from '../Card';
import Slider from '../Slider';

import api from '../../redux/thunk/api';
import { BASE_GET_URL, POPULAR_HOTELS_QUERY } from '../../constants/api';

import './HomesSection.styles.scss';

const HomesSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.api.popularHotels.data);

  useEffect(() => {
    dispatch(api({ url: BASE_GET_URL, query: POPULAR_HOTELS_QUERY, type: 'popularHotels' }));
  }, []);

  return (
    <Section className="homes-section">
      <Title className="homes-section__title" text="Homes guests loves" />
      {data ? (
        <Slider>
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                src={card.imageUrl}
                alt={card.name}
                href={card.id}
                linkText={card.name}
                descText={`${card.city}, ${card.country}`}
              />
            </SwiperSlide>
          ))}
        </Slider>
      ) : (
        <div className="alert-error">Loading, please wait...</div>
      )}
    </Section>
  );
};

export default HomesSection;
