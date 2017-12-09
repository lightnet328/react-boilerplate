// @flow
import "normalize.css/normalize.css";
import React from "react";
import type { ComponentType } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "react-hot-loader/patch";
import store, { history } from "store";
import App from "./app";
import type { Props } from "./app";

const render = (Component: ComponentType<Props>) => {
  const container: Element = (document.querySelector("#app"): any);
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    container
  );
};

render(App);

if (module.hot) {
  module.hot.accept("reducers", () => {
    store.replaceReducer(require("reducers").default); // eslint-disable-line global-require
  });
  module.hot.accept("./app", () => {
    render(require("./app").default); // eslint-disable-line global-require
  });
}
