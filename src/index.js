import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import reducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import saga
import createSagaMiddleware from "redux-saga";

//import mysaga file
import mySaga from "./sagas";

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  //** using middleware
  //applyMiddleware(sagaMiddleware)
  //** useing middleware and Redux Devtools
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//run saga
sagaMiddleware.run(mySaga);
