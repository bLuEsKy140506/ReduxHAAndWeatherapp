import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// let city = ["Manila", "Paris", "London", "San Francisco"];

//Action
/*
Step 4
  Create a weather slice using the “createSlice” function from Redux Toolkit.
  Add weather data, a loading status, and an error status to the initial state.
     Use the ready-made API
     API key: a05c7c2a2aae40feb82131443230105
*/
export const fetchWeatherCities = createAsyncThunk(
  "fetchWeatherCity",
  async (id) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=a05c7c2a2aae40feb82131443230105&q=${id}`
    );
    return response.json();
  }
);

/*
Step 5
    Handle different states of the async action: pending, fulfilled, and rejected.
    To do this, use the “extraReducers” property in the “createSlice” function.
    credit to 🫡 https://www.youtube.com/watch?v=2JBx_06dD1k
*/

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherCities.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchWeatherCities.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchWeatherCities.rejected, (state) => {
      return {
        ...state,
        isError: true,
      };
    });
  },
});

// export const { increment, decrement } = todosSlice.actions;

export default weatherSlice.reducer;
