import { configureStore } from '@reduxjs/toolkit';
import news from "../features/news/newsSlice";


export const store = configureStore({
  reducer: {
    news
  },
});
