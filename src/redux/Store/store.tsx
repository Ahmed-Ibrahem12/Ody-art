import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Slices/ImagesSlice';

export const store = configureStore({
  reducer: {
        // Add your reducers here
      image: imageReducer,
  },
});