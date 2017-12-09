// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  & > a {
    display: flex;
    justify-content: center;
    flex: auto;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: #555555;
    &:hover {
      background: #eeeeee;
    }
  }
`;

class Navigation extends Component<{}> {
  render() {
    return (
      <Root {...this.props}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/calendar">Calendar</Link>
      </Root>
    );
  }
}

export default Navigation;
