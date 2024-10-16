import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL_FEEDBACKS = "http://localhost:8000/feedbacks";

export type Feed = {
  id: string;
  feedId: string;
  type: string;
  rate: number;
  comment: string;
  author: string;
  country: string;
};

type FeedbacksState = {
  feedbacks: Feed[];
  postSuccessful: boolean;
  searchfield: string;
  loading: boolean;
};

const fetchFeedbacks = async (): Promise</*unresolved*/ any> => {
  try {
    const response = await axios.get(URL_FEEDBACKS);
    const feedbacks = response.data;
    return { feedbacks };
  } catch (error) {
    console.error(error);
  }
};

export const getFeedbacksAsync = createAsyncThunk(
  "feedbacks/getFeedbacksAsync",
  fetchFeedbacks,
);

const saveFeed = async (feed: Feed) => {
  try {
    const response = await axios.post(URL_FEEDBACKS, feed);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const saveFeedBacksAsync = createAsyncThunk(
  "feeds/saveFeedBacksAsync",
  saveFeed,
);

const initialState: FeedbacksState = {
  feedbacks: [],
  postSuccessful: false,
  searchfield: "",
  loading: true,
};

export const filteredFeedbacksSlice = createSlice({
  name: "filteredFeedbacks",
  initialState,
  reducers: {
    filterFeedbacks: (state, action: PayloadAction<string>) => {
      state.searchfield = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getFeedbacksAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.feedbacks = action.payload.feedbacks;
        state.loading = false;
      },
    );
    builder.addCase(saveFeedBacksAsync.fulfilled, (state) => {
      state.postSuccessful = true;
    });
  },
});

export const { filterFeedbacks } = filteredFeedbacksSlice.actions;

export default filteredFeedbacksSlice.reducer;
