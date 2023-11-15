import { createSlice } from '@reduxjs/toolkit';

const registroSlice = createSlice({
  name: 'registro',
  initialState: {
    abierto: false,
  },
  reducers: {
    RtoggleModal: (state) => {
        state.abierto = !state.abierto;
        document.body.style.overflow = state.abierto ? 'hidden' : 'auto';
      },
  },
});

export const { RtoggleModal } = registroSlice.actions;

export default registroSlice.reducer;
