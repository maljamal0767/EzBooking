import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './slices/flightsSlice';
import bookingReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    flights: flightsReducer,
    booking: bookingReducer,
  },
});

export default store;
