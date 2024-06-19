import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Expense: [
    {
      id: 1,
      Category: "other",
      Amount: "12001",
      Date: "22-03-2024",
    },
  ],
};

const expenseslice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const expense = {
        id: nanoid(),
        Category: action.payload.category,
        Amount: action.payload.amount,
        Date: action.payload.date,
      };
      state.Expense.push(expense);
    },
    removeexpense: (state, action) => {
      state.Expense = state.Expense.filter(
        (expense) => expense.id != action.payload
      );
    },
  },
});

export default expenseslice.reducer;
export const { addExpense, removeexpense } = expenseslice.actions;
