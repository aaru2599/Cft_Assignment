import { put, takeLatest } from "redux-saga/effects";
import { fetchPostSuccess, fetchPostfailure } from "./postSlice";

const getRequest = () => async (url) => {
  try {
    const responce = await fetch(url);
    const parsedResponce = await responce.json();
    return parsedResponce;
  } catch (err) {
    return null;
  }
};

export function* getPost(){
    try{
        const productResponce=yield getRequest("https://jsonplaceholder.typicode.com/posts")||[]
        console.log("productResponce",productResponce);
        if(!productResponce){
            yield put(fetchPostfailure());
            return ;
        }
        yield put(fetchPostSuccess({result:productResponce}));
    }
    catch(err){
        yield put(fetchPostfailure)
    }

}
export function* watchFetchPost(){
    yield takeLatest(getPost,getPost)
}