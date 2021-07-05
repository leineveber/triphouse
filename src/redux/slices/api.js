/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import api from '../thunk/api';

const initialState = {
  popularHotels: {
    data: null,
  },
  searchHotels: {
    data: null,
  },
};

const apiSlice = createSlice({
  name: 'fetchApi',
  initialState,
  reducers: {},
  extraReducers: {
    [api.fulfilled]: (state, action) => {
      switch (action.meta.arg.type) {
        case 'popularHotels': {
          state.popularHotels.data = action.payload;
          break;
        }

        case 'searchHotels': {
          state.searchHotels.data = action.payload;
          break;
        }

        default: {
          state.fetch.data = {
            data: action.payload,
          };
        }
      }
    },
    [api.rejected]: (state, action) => {
      state[action.meta.arg.type] = {
        error: action.payload,
      };
    },
  },
});

export const { actions, reducer } = apiSlice;
