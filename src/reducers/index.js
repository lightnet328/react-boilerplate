// @flow
import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import counter from "./counter";
import calendar from "./calendar";

export default combineReducers({
  counter,
  calendar,
  router
});
