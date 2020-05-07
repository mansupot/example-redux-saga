/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:46:27
 * @Last Modified by:   Supot Patsaithong
 * @Last Modified time: 2020-05-07 23:46:27
 */
import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import saga
import createSagaMiddleware from "redux-saga";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

//import mysaga file
import mySaga from "./sagas";

export const history = createBrowserHistory();

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(history),
  //** using middleware
  //applyMiddleware(sagaMiddleware)

  //** useing middleware and Redux Devtools
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//run saga
sagaMiddleware.run(mySaga);
