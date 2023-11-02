import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import todoReducer from "./features/todo/weatherSlice.js";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
