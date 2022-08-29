import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  listNews: [],
  isError: false,
  isSuccess: false,
  message: "",
  news:{}
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

export const publish = createAsyncThunk(
  "news/publish",
  async (news, thunkAPI) => {
    try {
      return await newsService.publish(news);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getById = createAsyncThunk("news/getById", async (id) => {
  try {
    return await newsService.getById(id);
  } catch (error) {
    console.error(error);
  }
});

export const newsSlice = createSlice({
  name: "listNews",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.listNews = action.payload;
    });
    builder.addCase(getAllArchive.fulfilled, (state, action) => {
      state.listNews = action.payload;
    });
    builder.addCase(getAllArchive.pending, (state) => {
      state.isLoading = true;
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
    builder.addCase(publish.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.message = action.payload.message;
      state.listNews = [action.payload.news, ...state.listNews];
    });
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(publish.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.news = action.payload;
    });

  },
});

export const { reset } = newsSlice.actions;
export default newsSlice.reducer;
