import { configureStore } from '@reduxjs/toolkit';
import controlReducer from '../redux/controlSlice'
import loginReducer from '../redux/loginSlice'
import registerSlice from './registerSlice';

const store = configureStore({
  reducer: {
    control: controlReducer,
    modal: loginReducer,
    registro: registerSlice,
  },
});

export default store;