import { createSlice } from "@reduxjs/toolkit";
import NewsService from "../services/NewsService";

const initialState = {
  news: [],
  isLoading: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action) {
      state.news = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNews, setLoading } = newsSlice.actions;

export const getAllNews = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await NewsService.getAllNews();
    if (response.status === 200) {
      dispatch(setNews(response.data.result));
    }
  } catch (error) {
    // Hata durumlarına göre işlemler
  } finally {
    dispatch(setLoading(false));
  }
};

export default newsSlice.reducer;
