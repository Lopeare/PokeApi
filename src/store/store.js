import { configureStore } from '@reduxjs/toolkit';
import { pokeApiReducer } from '../slices/pokeApiSlice';

const store = configureStore(
  {
    reducer: {
      api: pokeApiReducer,
    },
  },
);
export default store;
