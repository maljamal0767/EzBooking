import { createSlice } from '@reduxjs/toolkit';

const flightsSlice = createSlice({
  name: 'flights',
  initialState: [],
  reducers: {
    setFlights: (state, action) => action.payload,
  },
});

export const { setFlights } = flightsSlice.actions;
export default flightsSlice.reducer;
