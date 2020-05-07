/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:45:47
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-07 23:54:00
 */
export default (state = { products: [], total: "0" }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "SUM_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
