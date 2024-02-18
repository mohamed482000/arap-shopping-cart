import { configureStore } from "@reduxjs/toolkit";
import LabtobSlice from "./LabtopSlice";

const store = configureStore({
  reducer: {
    LabtobSlice,
  },
});

export default store;
