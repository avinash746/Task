import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';

// Redux store configuration
export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
  },
});