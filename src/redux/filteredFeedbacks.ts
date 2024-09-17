// import { CHANGE_SEARCHFIELD } from "./constant";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL_FEEDBACKS = "http://localhost:8000/data";

type AirBnB = {
  id: number;
  airId: number;
  score: number;
  comment: string;
};

type FeedbacksState = {
  airFeedbacks: AirBnB[];
  chillFeedbacks: [];
  searchfield: string;
  airPath: string;
  loading: boolean;
};

export async function fetchFeedbacks(): Promise</*unresolved*/ any> {
  try {
    const response = await axios.get(URL_FEEDBACKS);
    const feedbacks = response.data[0].feedbacks;
    return { feedbacks };
  } catch (error) {
    console.error(error);
  }
}

export const getFeedbacksAsync = createAsyncThunk(
  "feedbackss/getFeedbacksAsync",
  fetchFeedbacks,
);

const initialState: FeedbacksState = {
  airFeedbacks: [],
  chillFeedbacks: [],
  searchfield: "",
  airPath: "lalita",
  loading: true,
};

export const filteredFeedbacksSlice = createSlice({
  name: "filteredFeedbacks",
  initialState,
  reducers: {
    filterFeedbacks: (state, action: PayloadAction<string>) => {
      state.searchfield = action.payload;
    },
    getPath: (state, action: PayloadAction<string>) => {
      state.airPath = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getFeedbacksAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.airFeedbacks = action.payload.feedbacks.airBnB;
        state.chillFeedbacks = action.payload.feedbacks.chill;
        state.loading = false;
      },
    );
  },
});

export const { filterFeedbacks, getPath } = filteredFeedbacksSlice.actions;

export default filteredFeedbacksSlice.reducer;
