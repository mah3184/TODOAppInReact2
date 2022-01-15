import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Header";
import { App } from "./App";
import { Footer } from "./Footer";

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
