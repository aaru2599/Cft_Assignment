import { put, takeLatest } from "redux-saga/effects";
import { fetchPostRequest, fetchPostSuccess, fetchPostfailure } from "./postSlice";



export function* getPost(){
    try{
        const productResponce=yield fetch("https://jsonplaceholder.typicode.com/posts")||[]
        console.log("productResponce",productResponce);

        const data=yield productResponce.json
        if(!data){
            yield put(fetchPostfailure());
            return ;
        }
        yield put(fetchPostSuccess({result:data}));
    }
    catch(err){
        yield put(fetchPostfailure)
    }

}
export function* watchFetchPost(){
    yield takeLatest(fetchPostRequest.type,getPost)
}