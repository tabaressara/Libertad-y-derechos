import { createSlice } from '@reduxjs/toolkit';

const controlSlice = createSlice({
  name: 'control',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleLoggedIn } = controlSlice.actions;
export default controlSlice.reducer;
