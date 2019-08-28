import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import rootReducer from "./reducers/index";

export default () => {
  const store = createStore(rootReducer, applyMiddleware(Logger));
  return store;
};
