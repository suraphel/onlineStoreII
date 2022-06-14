// shall create a slice or a component that will have its own name and
// the functions that it shall do!

//The popup windows with the details of the  cart
//  make it a model later

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0, // value of popUp cart
  price: 0,
  totalquantity: 0, // value of Mycart
  description: "No description",
  img: "",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // these are the function that will be implemented
    // increase the selected item quantity by one
    increment(state, action) {
      //state.TotalAmount = state.quantity * state.price;
      state.totalquantity = state.quantity++ + action.payload;
      // action.payload as the price is an inputted value
      console.log(" COMING FROM THE CREATE-SLICE PAGE");
    },

    decrement(state, action) {
      state.totalquantity = state.quantity-- + action.payload;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalquantity++;

      // the data that goes into the arrat
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.totalprice,
          img: "",
        });
      } else {
        existingItem.quantity++;
        existingItem.TotalAmount = existingItem.totalprice + existingItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); // return the items with diff id's
      } else {
        existingItem.quantity--;
        state.TotalAmount = existingItem.totalprice - existingItem.price;
      }
    },
  },
});

// whu the name export
export const cartAction = cartSlice.actions;

export default cartSlice;
