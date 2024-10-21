import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBarChartData } from "../components/config/apiService";

// Async action to fetch bar chart data
export const fetchBarChart = createAsyncThunk(
  "barChart/fetchBarChart",
  async (selectedMonth) => {
    const response = await fetchBarChartData(selectedMonth);
    return response.data; // Return the data for Redux to store
  }
);

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    chartData: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can define additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarChart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBarChart.fulfilled, (state, action) => {
        state.loading = false;
        state.chartData = action.payload;
      })
      .addCase(fetchBarChart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default barChartSlice.reducer;
