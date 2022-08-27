import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  listNews: [],
};

export const getAll = createAsyncThunk("news/getAll", async () => {
  try {
    return await newsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.listNews = action.payload;
    });
  },
});

export default newsSlice.reducer;
