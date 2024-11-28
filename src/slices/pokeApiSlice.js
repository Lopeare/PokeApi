import { createSlice } from '@reduxjs/toolkit';
import getPokemon from './pokeApiThunk';

const initialState = {
  pokemon: {
    name: '',
    id: '',
    weight: '',
    img: null,
  },
  isLoading: false,
  isEmpty: false,
};

export const pokeApiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemon.pending]: (state) => {
      state.isLoading = true;
    },

    [getPokemon.fulfilled]: (state, { payload }) => {
      state.pokemon.name = payload.name;
      state.pokemon.id = payload.id;
      state.pokemon.weight = payload.weight;
      state.pokemon.img = payload.sprites.front_default;
      state.isLoading = false;
      state.isEmpty = false;
    },

    [getPokemon.rejected]: (state, action) => {
      state.isLoading = false;
      state.isEmpty = true;
      // eslint-disable-next-line no-alert
      // alert(action.payload);
    },
  },
});

export const pokeApiReducer = pokeApiSlice.reducer;
