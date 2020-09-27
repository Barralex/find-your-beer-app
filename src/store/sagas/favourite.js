import { call, getContext, put, takeEvery } from "redux-saga/effects";
import FavouriteActions, { FavouriteTypes } from "../reducers/favourite";

export default [
  setFavouriteWatcher,
  getFavouriteWatcher,
  removeFavouriteWatcher,
];

function* setFavouriteWatcher() {
  yield takeEvery(FavouriteTypes.SET_FAVOURITE, setFavouriteHandler);
}

function* getFavouriteWatcher() {
  yield takeEvery(FavouriteTypes.GET_FAVOURITE, getFavouriteHandler);
}

function* removeFavouriteWatcher() {
  yield takeEvery(FavouriteTypes.REMOVE_FAVOURITE, removeFavouriteHandler);
}

function* setFavouriteHandler({ favourite }) {
  try {
    const storage = yield getContext("storage");
    yield call(storage.set, favourite.id.toString(), favourite.name);
    yield put(FavouriteActions.favouriteDone(favourite));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}

function* getFavouriteHandler({ favouriteUuid }) {
  try {
    const storage = yield getContext("storage");
    const favourite = yield call(storage.get, favouriteUuid);
    yield put(FavouriteActions.favouriteDone(favourite));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}

function* removeFavouriteHandler({ favouriteUuid }) {
  try {
    const storage = yield getContext("storage");
    const favourite = yield call(storage.remove, favouriteUuid);
    yield put(FavouriteActions.favouriteDone(favourite));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}
