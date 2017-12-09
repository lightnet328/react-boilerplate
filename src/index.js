// @flow
import "normalize.css/normalize.css";
import React from "react";
import { render } from "react-dom";
import App from "./app";

const container: Element = (document.querySelector("#app"): any);
render(<App />, container);
