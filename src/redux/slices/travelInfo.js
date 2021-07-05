import { createSlice } from '@reduxjs/toolkit';

const initialState = { adults: 1, children: 0, rooms: 1, childrenAges: [] };

const travelInfoSlice = createSlice({
  name: 'travelInfo',
  initialState,
  reducers: {
    decrease(state, action) {
      state[action.payload] -= 1;
    },
    increase(state, action) {
      state[action.payload] += 1;
    },
    addChildren(state, action) {
      const currentChildren = state.childrenAges.findIndex(
        (children) => children.id === action.payload.id,
      );

      if (currentChildren === -1) {
        state.childrenAges.push(action.payload);
      } else {
        state.childrenAges.splice(currentChildren, 1);
        state.childrenAges.push(action.payload);
      }
    },
    removeChildren(state) {
      state.childrenAges.pop();
    },
  },
});

export const { decrease, increase, addChildren, removeChildren } = travelInfoSlice.actions;
export default travelInfoSlice.reducer;
