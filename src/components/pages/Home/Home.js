import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Actions from "actions/counter";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

class Home extends Component {
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
  state => ({
    counter: state.counter.counter
  }),
  dispatch => bindActionCreators(Actions, dispatch)
)(Home);
