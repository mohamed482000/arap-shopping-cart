import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLabtopData = createAsyncThunk(
  "getDate",
  async (r, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: "https://data-6kmx.onrender.com/products",
      });
      return data.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const state = {
  allData: [],
  labtops: [],
  phones: [],
  loading: true,
  error: null,
};
const LabtobSlice = createSlice({
  name: "labtobData",
  initialState: state,
  extraReducers: (builder) => {
    builder.addCase(getLabtopData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLabtopData.fulfilled, (state, action) => {
      state.loading = false;
      state.allData = action.payload;
      state.labtops = action.payload.filter((lap) => lap.isLaptop === true);
      state.phones = action.payload.filter((lap) => !lap.isLaptop === true);
    });
    builder.addCase(getLabtopData.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default LabtobSlice.reducer;
