import React, { Component } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";

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
    return (
      <Root>
        <Count>0</Count>
        <ButtonContainer>
          <IncrementButton>+</IncrementButton>
          <DecrementButton>-</DecrementButton>
        </ButtonContainer>
      </Root>
    );
  }
}

export default Home;
