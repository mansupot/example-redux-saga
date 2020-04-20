import { combineReducers } from "redux";
import product from "./product";
import message from "./message";

export default combineReducers({
  product,
  message,
});
