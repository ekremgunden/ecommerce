import { configureStore } from '@reduxjs/toolkit';
import BasketReducer from './Basket';

export default configureStore({
  reducer: {
    BasketReducer: BasketReducer
  },
});