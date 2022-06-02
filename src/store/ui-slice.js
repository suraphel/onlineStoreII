// Controlles when to show the popup shopping cart

import { createSlice } from "@reduxjs/toolkit";

const initailMyCartstate = { showCart: true };

const showMyCart = createSlice({
  name: "mycart",
  initialState: initailMyCartstate,
  reducers: {
    showCartz(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const showMyCartAction = showMyCart.actions;

export default showMyCart;
