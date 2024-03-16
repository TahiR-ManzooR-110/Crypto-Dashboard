// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import coinDataReducer  from './coinDataSlice'
 
export default configureStore({
  reducer: {
    coinData: coinDataReducer,
  },
});
