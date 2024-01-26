import { createSlice } from "@reduxjs/toolkit";
import NewsService from "../services/NewsService";

const initialState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action) {
      // state'i doğrudan değiştirebilecek şekilde immer kullanılıyor
      state.news = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNews } = newsSlice.actions;

export const getAllNews = () => async (dispatch) => {
  try {
    const response = await NewsService.getAllNews();
    if (response.status === 200) {
      dispatch(setNews(response.data.result));
    }
  } catch (error) {
    // Hata durumlarına göre işlemler
  }
};

export default newsSlice.reducer;
