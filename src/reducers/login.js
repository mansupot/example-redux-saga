/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:45:58
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-07 23:54:26
 */
export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, auth: action.payload };
    case "LOGIN_MOCK":
      return { ...state, auth: action.payload };
    case "LOG_OUT":
      return { ...state, auth: {} };
    default:
      return state;
  }
};
