import { createSlice } from "@reduxjs/toolkit";
import useAPI from "../Hooks/UseApi";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("state.data",state.data);
    },
    fetchPostfailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removePost: (state, action) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
      console.log(state.data);
    },
  },
});
export const {
  fetchPostRequest,
  fetchPostfailure,
  fetchPostSuccess,
  removePost,
} = postSlice.actions;

export const fetchPostData = () => async (dispatch) => {
  try {
    dispatch(fetchPostRequest());
    const { data, loading, error } = useAPI(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("data",data);
    if (!loading && !error) {
      dispatch(fetchPostSuccess(data));
    } else {
      dispatch(fetchPostfailure(error));
    }
  } catch (err) {
    dispatch(fetchPostfailure(err.message));
  }
};
export default postSlice.reducer;
