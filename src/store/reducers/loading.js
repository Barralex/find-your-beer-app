import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  running: false,
};

const { Types, Creators } = createActions({
  loadingOn: null,
  loadingOff: null,
});

const loadingOn = (state) => {
  return {
    ...state,
    running: true,
  };
};

const loadingOff = (state) => {
  return {
    ...state,
    running: false,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOADING_ON]: loadingOn,
  [Types.LOADING_OFF]: loadingOff,
});

export const LoadingTypes = Types;
export default Creators;
