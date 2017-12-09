// @flow
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Actions from "actions/counter";
import type { State, Dispatch } from "types";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Count = styled.p``;

const ButtonContainer = styled.div`
  & > *:not(:first-child) {
    margin-left: 32px;
  }
`;

const IncrementButton = styled(Button).attrs({
  background: "#F44336"
})``;

const DecrementButton = styled(Button).attrs({
  background: "#3F51B5"
})``;

type Props = {
  counter: number,
  increment: Function,
  decrement: Function
};

class CounterPage extends Component<Props> {
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
  (state: State) => ({
    counter: state.counter.counter
  }),
  (dispatch: Dispatch) => bindActionCreators(Actions, dispatch)
)(CounterPage);
