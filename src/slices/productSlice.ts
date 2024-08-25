import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataWithQuantity } from "../@types/data";

interface DecreaseQuantityPayload {
  id: number;
  type: string;
}

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

    updateQuantity: (state, action: PayloadAction<DecreaseQuantityPayload>) => {
      const itemToUpdate = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );

      if (itemToUpdate) {
        if (action.payload.type === "increment") {
          itemToUpdate.quantity += 1;
        }
        if (action.payload.type === "decrement" && itemToUpdate.quantity > 1) {
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
  updateQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
