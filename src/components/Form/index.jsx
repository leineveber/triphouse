import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FormDestination from '../FormDestination';
import FormDate from '../FormDate';
import FormTravelInfo from '../FormTravelInfo';
import FormButton from '../FormButton';

import { BASE_GET_URL } from '../../constants/api';
import api from '../../redux/thunk/api';

import './Form.styles.scss';

const Form = ({ className }) => {
  const dispatch = useDispatch();
  const travelInfo = useSelector((state) => state.rootReducer.travelInfo);
  const [place, setPlace] = useState('');

  const { adults, rooms } = travelInfo;
  const childrens = travelInfo.childrenAges.map((child) => Number.parseInt(child.age, 10));
  const query = `?search=${place}&adults=${adults}&children=${childrens}&rooms=${rooms}`;

  const handleInput = (event) => {
    setPlace(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    dispatch(api({ url: BASE_GET_URL, query, type: 'searchHotels' }));
  };

  return (
    <form className={`${className} form`} onSubmit={handleSubmitForm}>
      <FormDestination value={place} onChange={handleInput} />
      <FormDate />
      <FormTravelInfo />
      <FormButton />
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};

export default Form;
