import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favoriteCars: [],
};

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCars.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
