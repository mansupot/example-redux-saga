export const rename = (payload) => ({
  type: "RENAME_PRODUCT",
  payload,
});

export const changeAmount = (payload) => ({
  type: "CHANGE_AMOUNT",
  payload,
});

export const renameMessage = (payload) => ({
  type: "RENAME_SUCCESS",
  payload,
});

export const fetchProduct = (payload = "") => ({
  type: "FECTH_PRODUCT",
  payload,
});
