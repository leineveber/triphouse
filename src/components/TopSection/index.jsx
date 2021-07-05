import React from 'react';

import Section from '../Section';
import Header from '../Header';
import Form from '../Form';
import Apps from '../Apps';

import './TopSection.styles.scss';

const TopSection = () => (
  <Section className="top-section">
    <Header className="top-section__header" />
    <h2 className="top-section__title">
      Discover stays
      <br /> to live, work or just relax
    </h2>
    <Form className="top-section__form" />
    <Apps className="top-section__apps" />
  </Section>
);

export default TopSection;
