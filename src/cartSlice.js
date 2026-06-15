import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(current(state));
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => !item.id === action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
