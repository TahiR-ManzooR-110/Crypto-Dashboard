// src/features/coinDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinData: {},
};

export const coinDataSlice = createSlice({
  name: 'coinData',
  initialState,
  reducers: {
    setCoinData: (state, action) => {
      state.coinData = action.payload;
    },
  },
});

export const { setCoinData } = coinDataSlice.actions;

export const selectCoinData = (state) => state.coinData.coinData;

export default coinDataSlice.reducer;
