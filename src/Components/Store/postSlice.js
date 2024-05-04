import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  error: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostRequest: (state) => {
      state.loading = true;
    //   state.error = null;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      console.log(state.data);
      //   console.log("state.data", action.payload);
    },
    fetchPostfailure: (state) => {
      state.loading = false;
      state.data = [];

      //   state.error = action.payload;
    },

    // removePost: (state, action) => {
    //   state.data = state.data.filter((post) => post.id !== action.payload);
    //   console.log(state.data);
    // },
  },
});
export const {
  fetchPostRequest,
   fetchPostfailure,
  fetchPostSuccess,
  removePost,
} = postSlice.actions;

export default postSlice.reducer;
