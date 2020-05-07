/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:46:06
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-07 23:54:58
 */
export default (state = { loading: false, products: [] }, action) => {
  switch (action.type) {
    case "FATCH_PRODUCT":
      return state;
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.payload,
      };
    case "FETCH_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
