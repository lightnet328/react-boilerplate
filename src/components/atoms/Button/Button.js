// @flow
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
  color: ${({ color }: Props) => color};
  background: ${({ background }: Props) => background};
  cursor: pointer;
  &:hover {
    background: ${({ background }: Props) =>
      chroma(background)
        .darken()
        .hex()};
  }
`;

type Props = {
  color?: string,
  background?: string
};

class Button extends Component<Props> {
  static defaultProps = {
    color: "#eeeeee",
    background: "#111111"
  };

  render() {
    return <Root {...this.props} />;
  }
}

export default Button;
