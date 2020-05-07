/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:46:10
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-08 00:57:18
 */

import {
  call, // คือการเรียกฟังชั่นพร้อม parameter ทันที
  put, // คือการส่ง action โดยตรง โดยที่จะไม่โดนดักจับด้วย ซาก้า อีกแล้ว
  fork, //คือการเรียกฟังชันเหมือนกับ call แต่เป็นแบบ async
  take, //เปรียบเสมือนการ Pause ซึ่งจะรอให้ action type ที่กำหนดไว้ dispatch ขึ้นมา จึีงจะทไงานต่อ
  select, // ดึง state ออกมาจาก store ทันที
  takeEvery, //ดัก action ที่มีการเรียกด้วยซาก้า
  takeLatest, //เปรียบเสมือน takeEvery แต่จะสนใจแค่ action ล่าสุด
  delay, //คือฟังชั่นหน่วงเวลา
} from "redux-saga/effects";
import axios from "axios";
import { push } from "connected-react-router";

// watcher
export default function* () {
  yield takeEvery("FATCH_PRODUCT", handleProduct);
  yield takeLatest("LOGIN", handleLogin);
  yield takeLatest("ADD_TO_CART", handleAddToCart);
}

// worker
export const auth = async ({ username = "", password = "" }) => {
  try {
    const authData = await axios.post("http://localhost:1337/auth/local", {
      identifier: username,
      password,
    });
    localStorage.setItem(
      "auth",
      JSON.stringify({
        token: authData.data.jwt,
        email: authData.data.user.email,
        role: authData.data.user.role.type,
      })
    );
    return "success";
  } catch (err) {
    return "fail";
  }
};

// worker
export function* handleLogin(action) {
  const result = yield call(auth, action.payload);
  if (result === "success") {
    yield put(push("/product"));
  }
  yield take("LOG_OUT");
  yield put(push("/login"));
}

// worker
export function* handleAddToCart(action) {
  const products = yield select((state) => state.cart.products);
  const sumTotal = products.reduce((acc, { price }) => acc + price, 0);
  yield put({ type: "SUM_TOTAL", payload: sumTotal });
}

// worker
export function* handleProduct(action) {
  yield put({ type: "FETCH_LOADING" });
  const product = yield call(fetchProductFromApi);
  yield put({ type: "FETCH_PRODUCT_SUCCESS", payload: product });
  yield put({ type: "FETCH_LOADING" });
}

//method
export const fetchProductFromApi = async () => {
  try {
    const product = await axios.get("http://localhost:1337/products");
    return product.data;
  } catch (err) {
    throw err;
  }
};
