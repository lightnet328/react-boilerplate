import React, { Component } from "react";
import styled from "styled-components";
import chroma from "chroma-js";

const Root = styled.button`
  min-width: 64px;
  height: 32px;
  line-height: 32px;
  font-size: 18px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 16px;
  text-align: center;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  cursor: pointer;
  &:hover {
    background: ${({ background }) =>
      chroma(background)
        .darken()
        .hex()};
  }
`;

class Button extends Component {
  static defaultProps = {
    color: "#eeeeee",
    background: "#111111"
  };

  render() {
    return <Root {...this.props} />;
  }
}

export default Button;
