import { createSlice } from "@reduxjs/toolkit";
/*
Step 4
Create a counter slice using the “createSlice” function from Redux Toolkit.
Its initial state should be 0. It should have two reducers: increment and
decrement.

Step 5
Create a “Counter” component with two buttons for incrementing
and decrementing the counter and a display for the current count.
Step 6

Use the “useSelector” and “useDispatch” hooks from React-Redux to connect
the “Counter” component to the Redux store.
Step 7

Add the “Counter” component to the main “App” component.
Wrap it with the “Provider” component from React-Redux.


*/
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter = action.payload + 1;
    },
    decrement: (state, action) => {
      state.counter = action.payload - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
