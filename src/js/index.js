import React from "react";
import ReactDOM from "react-dom";

import ClickButton from "../components/ClickButton";
import Counter from "../components/Counter";
import CounterReducer from  "../components/CounterReducer";
import App from "../components/App";
import AppEffect from "../components/AppEffect";

//ReactDOM.render(<ClickButton />, document.getElementById("container"));
//ReactDOM.render(<Counter />, document.getElementById("container"));
ReactDOM.render(<AppEffect />, document.getElementById("container"));
