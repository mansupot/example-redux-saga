/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:45:55
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-07 23:54:48
 */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import product from "./product";
import login from "./login";
import cart from "./cart";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    product,
    login,
    cart,
  });

export default createRootReducer;
