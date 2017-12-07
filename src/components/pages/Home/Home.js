// @flow
import React, { Component } from "react";
import type { ComponentType } from "react";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Actions from "actions/counter";

const Root: ComponentType<{}> = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Count: ComponentType<{}> = styled.p``;

const ButtonContainer: ComponentType<{}> = styled.div`
  & > *:not(:first-child) {
    margin-left: 32px;
  }
`;

const IncrementButton: ComponentType<{}> = styled(Button).attrs({
  background: "#F44336"
})``;

const DecrementButton: ComponentType<{}> = styled(Button).attrs({
  background: "#3F51B5"
})``;

type Props = {
  counter: number,
  increment: Function,
  decrement: Function
};

class Home extends Component<Props> {
  render() {
    const { counter, increment, decrement, ...ohter } = this.props;
    return (
      <Root {...ohter}>
        <Count>{counter}</Count>
        <ButtonContainer>
          <IncrementButton onClick={increment}>+</IncrementButton>
          <DecrementButton onClick={decrement}>-</DecrementButton>
        </ButtonContainer>
      </Root>
    );
  }
}

export default connect(
  (state: Object) => ({
    counter: state.counter.counter
  }),
  (dispatch: Dispatch<any>) => bindActionCreators(Actions, dispatch)
)(Home);
