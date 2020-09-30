import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import NavigationService from "../libs/NavigationService";
import Storage from "../libs/Storage";
import APIClient from "./../libs/APIClient";
import configureReducers from "./reducers/index";
import sagas from "./sagas";

function ConfigureStore() {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      apiClient: APIClient,
      storage: Storage,
      navigation: NavigationService,
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
