import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import createStore from "./Redux/store";
import { Provider } from "react-redux";
import "./app.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  rootElement
);
