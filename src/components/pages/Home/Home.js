// @flow
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import Logo from "components/atoms/Logo";
import type { State, Dispatch } from "types";

const Root = styled.div``;

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

export default connect()(Home);
