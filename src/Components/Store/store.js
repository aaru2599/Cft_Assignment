import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";
const sagaMiddleware=createSagaMiddleware()
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware:(current)=>current({thunk:false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga)

