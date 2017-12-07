// @flow
import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import reducers from "reducers";

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(reducers, applyMiddleware(middleware));

export default store;

export { history, middleware };
