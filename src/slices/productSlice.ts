import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../@types/data";

export interface CounterState {
  cartProducts: IData[];
}

const initialState: CounterState = {
  cartProducts: [],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCarts: (state, action: PayloadAction<IData>) => {
      state.cartProducts.push(action.payload);
    },

    removeItemsFromCart: (state, action: PayloadAction<number>) => {
      const filterItems = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );

      state.cartProducts = filterItems;
    },
  },
});

// Action creator for addToCart
export const { addToCarts, removeItemsFromCart } = counterSlice.actions;

export default counterSlice.reducer;
