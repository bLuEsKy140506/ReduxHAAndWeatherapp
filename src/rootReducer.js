import { combineReducers } from "@reduxjs/toolkit";
import counter from "./features/reduxSlices/counterSlice.js";
import weather from "./features/reduxSlices/weatherSlice.js";
import city from "./features/reduxSlices/citiesSlice.js";

const rootReducer = combineReducers({
  counter: counter,
  weather: weather,
  city: city,
});

export default rootReducer;
