export default (
  state = { name: "iphone", amount: 1, products: [], isLoading: false },
  action
) => {
  switch (action.type) {
    case "RENAME_PRODUCT":
      return {
        ...state,
        name: action.payload,
      };
    case "CHANGE_AMOUNT":
      return {
        ...state,
        amount: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "FECTH_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
