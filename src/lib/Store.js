import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice'
export const Store = configureStore({
  reducer: {
    data: cartSlice,
  },
});

export default Store;