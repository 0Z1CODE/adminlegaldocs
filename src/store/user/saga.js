import { all, call, fork, takeEvery, put } from "redux-saga/effects";
import axios from "./../../services/axios";

import { GET_USER_INFO } from "./actionTypes";
import { requestUserInfo } from "./actions";

function* getCurrentUser() {
  try {
    const data = yield call(() => {
      return axios
        .get("/user")
        .then(function (response) {
          // console.log(response);
          return response.data;
        })
        .catch((r) => console.log(r));
    });
    yield put(requestUserInfo(data));
  } catch (error) {
    yield put();
  }
}

function* watchAxiosData() {
  yield takeEvery(GET_USER_INFO, getCurrentUser);
}

function* UserSaga() {
  yield all([fork(watchAxiosData)]);
}

export default UserSaga;
