import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  favouriteList: [],
  favourite: {},
  isFavourite: false,
};

const { Types, Creators } = createActions({
  setFavourite: ["favourite"],

  getFavouriteRequest: ["favouriteUuid"],

  isFavouriteRequest: ["favouriteUuid"],
  isFavouriteSuccess: ["status"],

  getFavouriteList: null,
  getFavouriteListDone: ["favouriteList"],
  removeFavourite: ["favouriteUuid"],
});

const getFavouriteListDone = (state, { favouriteList }) => {
  return {
    ...state,
    favouriteList,
  };
};

const isFavouriteSuccess = (state, { status }) => {
  return {
    ...state,
    isFavourite: status,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FAVOURITE_LIST_DONE]: getFavouriteListDone,
  [Types.IS_FAVOURITE_SUCCESS]: isFavouriteSuccess,
});

export const FavouriteTypes = Types;
export default Creators;
