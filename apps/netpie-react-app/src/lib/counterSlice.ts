'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// This is our special async thunk for the increment-and-wait-decrement behavior.
export const incrementAndAutoDecrement = createAsyncThunk(
  'counter/incrementAndAutoDecrement',
  async (_, { dispatch }) => {
    // First, dispatch the regular increment action so the UI updates immediately.
    dispatch(counterSlice.actions.increment());

    // Wait for 5 seconds.
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // After 5 seconds, dispatch the decrement action.
    dispatch(counterSlice.actions.decrement());
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Reducers for synchronous actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
