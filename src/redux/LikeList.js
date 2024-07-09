import { createSlice } from "@reduxjs/toolkit";

const storeInLocalStorage = (like) => {
  localStorage.setItem("like", JSON.stringify(like));
};

const LikeSlice = createSlice({
  name: "like",
  initialState: {
    like: JSON.parse(localStorage.getItem("like")) || [],
  },
  reducers: {
    addToLike(state, action) {
      const item = action.payload;
      const itemIndex = state.like.findIndex((likedItem) => likedItem.id === item.id);
      if (itemIndex === -1) {
        state.like.push(item);
        storeInLocalStorage(state.like);
      }
    },
    removeLike(state, action) {
      state.like = state.like.filter((item) => item.id !== action.payload.id);
      storeInLocalStorage(state.like);
    },
  },
});

export const { addToLike, removeLike } = LikeSlice.actions;
export default LikeSlice.reducer;
