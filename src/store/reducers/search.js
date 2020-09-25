import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  searchResult: {},
};

const { Types, Creators } = createActions({
  search: ["searchValue"],
  searchDone: ["searchResult"],
});

const searchDone = (state, { searchResult }) => {
  return {
    ...state,
    searchResult,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_DONE]: searchDone,
});

export const SearchTypes = Types;
export default Creators;
