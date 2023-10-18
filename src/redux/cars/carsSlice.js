import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOperations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
