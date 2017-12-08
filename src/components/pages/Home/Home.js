// @flow
import React, { Component } from "react";
import type { ComponentType } from "react";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

const Root: ComponentType<{}> = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Home extends Component<{}> {
  render() {
    return <Root {...this.props} />;
  }
}

export default connect(
  (state: Object) => ({}),
  (dispatch: Dispatch<any>) => ({})
)(Home);
