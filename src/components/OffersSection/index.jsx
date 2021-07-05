import React from 'react';

import Section from '../Section';
import Title from '../Title';
import Card from '../Card';

import data from '../../constants/offersData';

import './OffersSection.styles.scss';

const OffersSection = () => (
  <Section className="offers-section">
    <Title className="offers-section__title" text="What do we offer" />
    <div className="row">
      {data.map((card) => (
        <Card key={card.id} xlinkHref={card.xlinkHref} descText={card.name} />
      ))}
    </div>
  </Section>
);

export default OffersSection;
