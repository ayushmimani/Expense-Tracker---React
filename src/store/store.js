import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "./ExpenseSlice";

export const store = configureStore({
  reducer: {
    expense: ExpenseReducer,
  },
});
