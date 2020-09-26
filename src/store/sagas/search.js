import { call, getContext, put, takeEvery } from "redux-saga/effects";
import LoadingActions from "../reducers/loading";
import SearchActions, { SearchTypes } from "../reducers/search";

export default [searchWatcher];

function* searchWatcher() {
  yield takeEvery(SearchTypes.SEARCH, searchHandler);
}

function* searchHandler({ searchValue }) {
  try {
    yield put(LoadingActions.loadingOn());

    const APIClient = yield getContext("apiClient");
    const searchResult = yield call(APIClient.search, searchValue);
    yield put(SearchActions.searchDone(searchResult));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
    yield put(LoadingActions.loadingOff());
  }
}
