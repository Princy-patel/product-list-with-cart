import { configureStore } from "@reduxjs/toolkit";
import addToCarts from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    products: addToCarts,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
