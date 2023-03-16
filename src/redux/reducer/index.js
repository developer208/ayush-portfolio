import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { demoReducer } from "./demo";

export const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    mode: demoReducer,
  });
