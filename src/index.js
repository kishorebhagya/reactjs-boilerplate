import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/global.css";
import { Loader } from "./components/common";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Router from "./router";

console.warn = () => {};

const app = (
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <Router />
    </Suspense>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
