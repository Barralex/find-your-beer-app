import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import APIClient from "./../libs/APIClient";
import configureReducers from "./reducers/index";
import sagas from "./sagas";

function ConfigureStore() {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      apiClient: APIClient,
    },
  });

  let store;

  store = createStore(
    configureReducers(),
    applyMiddleware(...[sagaMiddleware])
  );

  sagaMiddleware.run(sagas);

  return store;
}

export default ConfigureStore();
