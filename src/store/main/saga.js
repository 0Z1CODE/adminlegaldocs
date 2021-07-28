import { all, call, fork, takeEvery, put } from "redux-saga/effects";
import axios from "./../../services/axios";
// import Core from "./../../electron/services/core";

import {
GET_GLOBAL_DATA,

} from "./actionTypes";
import {
setGlobalData
 
  
} from "./actions";

function* axiosDataAsync() {
  try {
    const data = yield call(() => {
      return axios
        .post("/api/",
        // {test: true}
        )
        .then(function (response) {
          const {status, statusText} = response;
          return response;
        }).catch(r => console.log(r));
    });
    if (data.data.hasOwnProperty("result") && data.data.result === false) {
        yield put(setGlobalData(data));

    }


  } 
  catch (error) {
    yield put();
  }
}

function* watchAxiosData() {
  yield takeEvery(GET_GLOBAL_DATA, axiosDataAsync);

}

function* MainSaga() {
  yield all([fork(watchAxiosData)]);
}

export default MainSaga;
