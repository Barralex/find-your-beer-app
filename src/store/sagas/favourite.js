import { call, getContext, put, takeEvery } from "redux-saga/effects";
import FavouriteActions, { FavouriteTypes } from "../reducers/favourite";
import LoadingActions from "../reducers/loading";

export default [
  setFavouriteWatcher,
  isFavouriteWatcher,
  removeFavouriteWatcher,
  getAllWatcher,
  getBreweryWatcher,
];

function* setFavouriteWatcher() {
  yield takeEvery(FavouriteTypes.SET_FAVOURITE, setFavouriteHandler);
}

function* isFavouriteWatcher() {
  yield takeEvery(FavouriteTypes.IS_FAVOURITE_REQUEST, isFavouriteHandler);
}

function* removeFavouriteWatcher() {
  yield takeEvery(FavouriteTypes.REMOVE_FAVOURITE, removeFavouriteHandler);
}

function* getAllWatcher() {
  yield takeEvery(FavouriteTypes.GET_FAVOURITE_LIST, GetAllHandler);
}

function* getBreweryWatcher() {
  yield takeEvery(FavouriteTypes.GET_FAVOURITE_REQUEST, getBreweryHandler);
}

function* GetAllHandler() {
  try {
    const storage = yield getContext("storage");
    var favouriteList = yield call(storage.getAll);
    yield put(FavouriteActions.getFavouriteListDone(favouriteList));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}

function* setFavouriteHandler({ favourite }) {
  try {
    const storage = yield getContext("storage");
    yield call(storage.set, favourite.id.toString(), favourite.name);
    yield put(FavouriteActions.isFavouriteSuccess(true));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}

function* isFavouriteHandler({ favouriteUuid }) {
  try {
    const storage = yield getContext("storage");
    const favourite = yield call(storage.get, favouriteUuid);
    yield put(FavouriteActions.isFavouriteSuccess(favourite !== null));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}

function* removeFavouriteHandler({ favouriteUuid }) {
  try {
    const storage = yield getContext("storage");
    yield call(storage.remove, favouriteUuid);
    yield put(FavouriteActions.isFavouriteSuccess(false));
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
  }
}

function* getBreweryHandler({ favouriteUuid }) {
  try {
    yield put(LoadingActions.loadingOn());
    const apiClient = yield getContext("apiClient");
    const navigationService = yield getContext("navigation");
    var brewery = yield call(apiClient.getBreweryById, favouriteUuid);
    navigationService.navigate("BreweryDetails", { brewery: brewery });
    yield;
  } catch (error) {
    console.log("Ups! something went wrong", error);
  } finally {
    yield put(LoadingActions.loadingOff());
  }
}
