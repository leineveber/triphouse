import React from 'react';
import { useSelector } from 'react-redux';

import { SwiperSlide } from 'swiper/react';

import Section from '../Section';
import Title from '../Title';
import Card from '../Card';
import Slider from '../Slider';

import './AvailableHotelsSection.styles.scss';

const AvailableHotelsSection = () => {
  const data = useSelector((state) => state.rootReducer.api.searchHotels.data);

  if (data) {
    return (
      <Section className="available-section">
        <Title className="available-section__title" text="Available hotels" />
        {data.length !== 0 ? (
          <Slider>
            {data.map((card) => (
              <SwiperSlide>
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
          <div className="alert-error">No hotels found. Try to change your search query.</div>
        )}
      </Section>
    );
  }

  return null;
};

export default AvailableHotelsSection;
