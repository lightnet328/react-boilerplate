// @flow
import React, { Component } from "react";
import type { ComponentType } from "react";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import Logo from "assets/images/react-logo.svg";

const Root: ComponentType<{}> = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const duration = 4;

const RotatingLogo = styled(Logo).attrs({
  width: 128,
  height: 128
})`
  animation: ${rotate360} ${duration}s linear infinite;
  &:hover {
    animation-duration: ${duration / 2}s;
  }
`;

class Home extends Component<{}> {
  render() {
    return (
      <Root {...this.props}>
        <RotatingLogo />
      </Root>
    );
  }
}

export default connect(
  (state: Object) => ({}),
  (dispatch: Dispatch<any>) => ({})
)(Home);
