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

import { rename as actionRename } from "../actions";

// import actions from "../actions";

const fetchProductFromApi = async (id) => {
  //Ex. call api
  return await axios.get(`http://localhost:1337/news/${id}`);
};

// watcher
export default function* () {
  yield takeEvery("FECTH_PRODUCT", handleProduct);
  yield takeEvery("RENAME_PRODUCT", rename);
  yield takeEvery("CHANGE_AMOUNT", log);
  // yield takeEvery("RENAME_SUCCESS", log);
  // yield takeLatest("RENAME_PRODUCT", rename)
}

// worker
export function* handleProduct(actions) {
  const data = yield call(fetchProductFromApi, "");
  //todo data ...
  //after then to store
}

export function* log(actions) {
  let result = yield call(show, actions);
  //todo result
}
export function* show(actions) {
  //todo ...
  return true;
}

export function* rename(actions) {
  let result = yield call(msgc, "Welcome", "Welcom back", actions);
  yield delay(2000);
  yield put({
    type: "RENAME_SUCCESS",
    payload: result,
  });
}

//Ex.
// export function* login() {
//   while (true) {
//     const auth = yield call(authen, user, pass);
//     saveItem(auth);
//     yield take("LOGOUT");
//     removeItem();
//   }
// }

export function* msgc(msg1, msg2, actions) {
  if (actions.payload !== "thailife") {
    return yield msg1;
  } else {
    return yield msg2;
  }
}
