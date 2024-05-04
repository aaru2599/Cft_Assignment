import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    removePost: (state,action) => {
      console.log("state", action.payload);
      
    },
  },
});

export const { removePost } = postSlice.actions;
export default postSlice.reducer;
