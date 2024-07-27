import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  cartProducts: [];
}

const initialState: CounterState = {
  cartProducts: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getAllProducts: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts } = counterSlice.actions;

export default counterSlice.reducer;
