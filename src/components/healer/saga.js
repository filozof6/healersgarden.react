import { takeLatest, put } from "redux-saga/effects";
import types from "./types";
import axios from "axios";

function* listAsync() {
    //let response = yield axios.get("http://localhost:4000/graphql");
    console.log("axios response");
    yield put({ type: types.LIST + "_saga", payload: [] });
}

const watchList = function*() {
    yield takeLatest(types.LIST, listAsync);
};

export default {
    watchList
};
