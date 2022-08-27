import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  listNews: [],
};

export const getAll = createAsyncThunk("listNews/getAllNews", async () => {
  try {
    return await newsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getAllArchive = createAsyncThunk("listNews/getAllArchive", async () => {
  try {
    return await newsService.getAllArchive();
  } catch (error) {
    console.error(error);
  }
});

export const archiveNews = createAsyncThunk("listNews/archiveNews", async (id) => {
  try {
    return await newsService.archiveNews(id);
  } catch (error) {
    console.error(error);
  }
});

export const removeNews = createAsyncThunk("listNews/removeNews", async (id) => {
  try {
    return await newsService.removeNews(id);
  } catch (error) {
    console.error(error);
  }
});

export const newsSlice = createSlice({
  name: "listNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.listNews = action.payload;
    });
    builder.addCase(getAllArchive.fulfilled, (state, action) => {
      state.listNews = action.payload;
    });
    builder.addCase(archiveNews.fulfilled, (state, action) => {
      state.listNews = state.listNews.filter(
        (elem) => elem._id !== action.payload.news._id
      );
    })
    builder.addCase(removeNews.fulfilled, (state, action) => {
      state.listNews = state.listNews.filter(
        (elem) => elem._id !== action.payload.news._id
      );
    })
  },
});

export default newsSlice.reducer;
