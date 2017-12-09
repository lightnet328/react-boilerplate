// @flow
import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import type { History } from "history";
import { routerMiddleware } from "react-router-redux";
import reducers from "reducers";
import type { Middleware, Store } from "types";

const history: History = createHistory();

const middleware: Middleware = routerMiddleware(history);

const store: Store = createStore(reducers, applyMiddleware(middleware));

export default store;

export { history, middleware };
