import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import showMyCart from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    showMyCartSlice: showMyCart.reducer,
  },
});

export default store;
