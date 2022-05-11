import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountAsync = createAsyncThunk(
  "counter/fetchCount",
  async () => {
    return await axios.get("http://localhost:4000/fetchCount").then((response) => {
      return response.data;
    });
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    loadingStatus: ""
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementAmount: (state, action) => {
      state.count += Number(action.payload);
    },
  },
  extraReducers: {
    [fetchCountAsync.fulfilled]: (state, action) => {
      state.loadingStatus = "fulfilled";
      state.count += Number(action.payload.count);
    },
    [fetchCountAsync.pending]: (state, action) => {
      state.loadingStatus = "pending";
    }
  },
});

export const { increment, decrement, incrementAmount } = counterSlice.actions;
export default counterSlice.reducer;
