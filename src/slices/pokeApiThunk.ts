import { createAsyncThunk, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import pokeApi from '../api/PokeApi';

const getPokemon = createAsyncThunk(
  // action type
  'api/getPokemon',
  // callback function
  async (id:string, thunkAPI) => {
    try {
      const res = await pokeApi(id);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue('OOPS! Something went wrong. Maybe no more page to read.');
    }
  },
);
export default getPokemon;
