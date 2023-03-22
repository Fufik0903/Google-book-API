import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";

const root = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  root
);
