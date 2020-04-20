export default (state = "", action) => {
  switch (action.type) {
    case "RENAME_SUCCESS":
      return action.payload;
    case "RENAME_FAILED":
      return action.payload;
    default:
      return state;
  }
};
