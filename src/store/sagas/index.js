import { all, fork } from "redux-saga/effects";
import search from "./search";

const forkList = (sagaList) => sagaList.map((saga) => fork(saga));

export default function* rootSaga() {
  yield all([...forkList(search)]);
}
