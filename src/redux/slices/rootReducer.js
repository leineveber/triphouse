import { combineReducers } from '@reduxjs/toolkit';

import travelInfo from './travelInfo';
import { reducer as api } from './api';

const rootReducer = combineReducers({
  travelInfo,
  api,
});

export default rootReducer;
