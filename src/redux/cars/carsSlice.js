import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCarsForFilter,
  fetchCars,
  fetchFirstPage,
} from './carsOperations';

const initialState = {
  cars: [],
  filterCars: [],
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

// const handleAllCarsFilterFulfilled = (state, action) => {

// }

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  // reducers: {
  //   addFilter: (state, { payload }) => {
  //     state.cars = payload;
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchFirstPage.pending, handlePending)
      .addCase(fetchFirstPage.fulfilled, handleFirstPageFulfilled)
      .addCase(fetchFirstPage.rejected, handleRejected)
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchAllCarsForFilter.pending, handlePending)
      .addCase(fetchAllCarsForFilter.fulfilled, handleFirstPageFulfilled)
      .addCase(fetchAllCarsForFilter.rejected, handleRejected),
});

// export const { addFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
