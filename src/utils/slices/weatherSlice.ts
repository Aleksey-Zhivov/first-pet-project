import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TWeather } from "../types/types";
import { getWeatherApi } from "@api";

interface IWeatherState {
  data: TWeather | undefined;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: IWeatherState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (data: string) => getWeatherApi(data),
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state) => {
      state.isLoading = false;
    },
  },
  selectors: {
    selectWeather: (state) => {
      state.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const weatherReducer = weatherSlice.reducer;
