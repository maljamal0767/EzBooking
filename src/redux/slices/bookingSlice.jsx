import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {},
  reducers: {
    setBooking: (state, action) => action.payload,
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
