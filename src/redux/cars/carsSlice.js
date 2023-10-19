import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFirstPage } from './carsOperations';

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

const handleFirstPageFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};
const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = [...state.cars, ...action.payload];
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchFirstPage.pending, handlePending)
      .addCase(fetchFirstPage.fulfilled, handleFirstPageFulfilled)
      .addCase(fetchFirstPage.rejected, handleRejected)
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected),
});


export const carsReducer = carsSlice.reducer;
