// @flow
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import styled from "styled-components";
import Home from "components/pages/Home";
import Counter from "components/pages/Counter";
import Calendar from "components/pages/Calendar";
import Navigation from "components/molecules/Navigation";
import type { Store } from "types";
import type { History } from "history";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledNavigation = styled(Navigation)`
  width: 100vw;
  padding: 8px;
  box-sizing: border-box;
`;

const Content = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type Props = {
  store: Store,
  history: History
};

class App extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container>
            <StyledNavigation />
            <Content>
              <Route exact path="/" component={Home} />
              <Route exact path="/counter" component={Counter} />
              <Route exact path="/calendar" component={Calendar} />
            </Content>
          </Container>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
