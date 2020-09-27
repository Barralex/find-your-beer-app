import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  favouriteList: [{}],
  favourite: {},
};

const { Types, Creators } = createActions({
  setFavourite: ["favourite"],
  getFavourite: ["favouriteUuid"],
  favouriteDone: ["favourite"],
  getFavouriteList: null,
  removeFavourite: ["favouriteUuid"],
});

const getFavouriteList = (state) => {
  return {
    ...state,
    favouriteList,
  };
};

const favouriteDone = (state, { favourite }) => {
  return {
    ...state,
    favourite,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FAVOURITE_LIST]: getFavouriteList,
  [Types.FAVOURITE_DONE]: favouriteDone,
});

export const FavouriteTypes = Types;
export default Creators;
