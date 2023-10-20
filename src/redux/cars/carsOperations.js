import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b7ee1e21b9aa6eb0794d9b.mockapi.io/';

export const fetchFirstPage = createAsyncThunk(
  'adverts/fetchFirst',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
export const fetchCars = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'adverts/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/:${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllCarsForFilter = createAsyncThunk(
  'adverts/fetchForFilter',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
