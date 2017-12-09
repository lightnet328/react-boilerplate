// @flow
import React, { Component } from "react";
import SVGLogo from "assets/images/react-logo.svg";

class Logo extends Component<{}> {
  render() {
    return <SVGLogo {...this.props} />;
  }
}

export default Logo;
