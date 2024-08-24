import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataWithQuantity } from "../@types/data";

export interface CounterState {
  cartProducts: IDataWithQuantity[];
}

const initialState: CounterState = {
  cartProducts: [],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCarts: (state, action: PayloadAction<IDataWithQuantity>) => {
      state.cartProducts.push(action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToUpdate = state.cartProducts.find(
        (item) => item.id === action.payload
      );

      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToUpdate = state.cartProducts.find(
        (item) => item.id === action.payload
      );

      if (itemToUpdate) {
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= 1;
        }
      }
    },

    removeItemsFromCart: (state, action: PayloadAction<number>) => {
      const filterItems = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );

      state.cartProducts = filterItems;
    },

    makeCartEmpty: (state) => {
      state.cartProducts = [];
    },
  },
});

// Action creator for addToCart
export const {
  addToCarts,
  removeItemsFromCart,
  makeCartEmpty,
  increaseQuantity,
  decreaseQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
