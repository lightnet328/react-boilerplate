// @flow
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "store";
import Home from "components/pages/Home";
import Navigation from "components/molecules/Navigation";

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
