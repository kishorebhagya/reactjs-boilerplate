import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middlewares = [];

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

middlewares.push(applyMiddleware(thunk));

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(...middlewares)
);
