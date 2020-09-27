import { all, fork } from "redux-saga/effects";
import favourite from "./favourite";
import search from "./search";

const forkList = (sagaList) => sagaList.map((saga) => fork(saga));

export default function* rootSaga() {
  yield all([...forkList(search), ...forkList(favourite)]);
}
