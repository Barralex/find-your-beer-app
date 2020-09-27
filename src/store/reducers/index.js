import { combineReducers } from "redux";
import { reducer as favourite } from "./favourite";
import { reducer as loading } from "./loading";
import { reducer as search } from "./search";

export default function configureReducers() {
  return combineReducers({ search, loading, favourite });
}
