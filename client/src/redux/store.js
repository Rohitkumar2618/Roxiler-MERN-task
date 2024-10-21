import { configureStore } from "@reduxjs/toolkit";
import barChartReducer from "./barChartSlice";

// Create and export the store
const store = configureStore({
  reducer: {
    barChart: barChartReducer,
  },
});

export default store;
