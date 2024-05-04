import { all, fork } from "redux-saga/effects";
import { watchFetchPost } from "./PostSaga";

export default function* rootSaga(){
yield all([fork(watchFetchPost)])
}