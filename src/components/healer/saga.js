import { takeLatest, put } from "redux-saga/effects";
import types from "./types";
import axios from "axios";

function* listAsync() {
  let response = yield axios.get("http://localhost:3001/healers");
  console.log("axios response");
  console.log(response);
  yield put({ type: types.LIST + "_saga", payload: response.data });
}

const watchList = function*() {
  yield takeLatest(types.LIST, listAsync);
};

export default {
  watchList
};
