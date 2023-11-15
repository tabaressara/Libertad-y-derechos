import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    abierto: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.abierto = !state.abierto;
      document.body.style.overflow = state.abierto ? 'hidden' : 'auto';
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;