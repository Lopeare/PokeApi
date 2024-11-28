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
    // If we get a pokemon, fill neccessary data
    [getPokemon.fulfilled]: (state, { payload }) => {
      state.pokemon.name = payload.name;
      state.pokemon.id = payload.id;
      state.pokemon.weight = payload.weight;
      state.pokemon.img = payload.sprites.front_default;
      state.isLoading = false;
      state.isEmpty = false;
    },

    // If pokemon doesn't exist or we get an error
    [getPokemon.rejected]: (state, action) => {
      state.isLoading = false;
      state.isEmpty = true;
    },
  },
});

export const pokeApiReducer = pokeApiSlice.reducer;
