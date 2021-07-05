import React, { useState } from 'react';
import classNames from 'classnames';

import Section from '../Section';
import Title from '../Title';
import Button from '../Button';
import Card from '../Card';

import useScreenWidth from '../../hooks/useScreenWidth';

import bestDestinationsData from '../../constants/bestDestinationsData';

import './BestDestinationsSection.styles.scss';

const BestDestinationsSection = () => {
  const isPC = useScreenWidth();
  const [isClickedMoreBtn, setClickedMoreBtn] = useState(false);
  const [data, setData] = useState({
    firstRow: bestDestinationsData.firstRow.regions,
    secondRow: bestDestinationsData.secondRow.regions,
  });

  const { firstRow, secondRow } = data;

  const handleClickTab = (mode) => () => {
    setData(() => ({
      firstRow: bestDestinationsData.firstRow[mode],
      secondRow: bestDestinationsData.secondRow[mode],
    }));
  };

  const handleClickMoreBtn = () => {
    setClickedMoreBtn(!isClickedMoreBtn);
  };

  return (
    <Section className="destinations-section">
      <Title className="destinations-section__title" text="The best destinations" />
      <div className="destinations-section__tabs">
        <Button
          className={classNames('destinations-section__button button', {
            'button--active': data.firstRow === bestDestinationsData.firstRow.regions,
          })}
          text="Regions"
          onClick={handleClickTab('regions')}
        />
        <Button
          className={classNames('destinations-section__button button', {
            'button--active': data.firstRow === bestDestinationsData.firstRow.cities,
          })}
          text="Cities"
          onClick={handleClickTab('cities')}
        />
        <Button
          className={classNames('destinations-section__button button', {
            'button--active': data.firstRow === bestDestinationsData.firstRow.places,
          })}
          text={isPC ? 'Places of interest' : 'Places'}
          onClick={handleClickTab('places')}
        />
      </div>
      <div className="row">
        {firstRow.map((card) => (
          <Card key={card.id} src={card.imageUrl} alt={card.name} linkText={card.name} />
        ))}
      </div>
      {isClickedMoreBtn && (
        <div className="row">
          {secondRow.map((card) => (
            <Card key={card.id} src={card.imageUrl} alt={card.name} linkText={card.name} />
          ))}
        </div>
      )}
      <Button
        className={classNames('destinations-section__more-button', {
          'destinations-section__more-button--active': isClickedMoreBtn,
        })}
        onClick={handleClickMoreBtn}
      />
    </Section>
  );
};

export default BestDestinationsSection;
