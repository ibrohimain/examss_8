import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./cartSlice";
import LikeSlice from "./LikeList";;

const Store = configureStore({
  reducer: {
    cart: CardSlice,
    like: LikeSlice,
  },
});

export default Store;
