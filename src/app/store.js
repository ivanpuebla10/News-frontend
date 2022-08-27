import { configureStore } from '@reduxjs/toolkit';
import listNews from "../features/news/newsSlice";


export const store = configureStore({
  reducer: {
    listNews
  },
});
