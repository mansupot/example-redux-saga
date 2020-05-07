/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:45:38
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-08 00:56:11
 */

export const fetchProduct = (payload = "") => ({
  type: "FATCH_PRODUCT",
  payload,
});

export const signIn = (payload = {}) => ({
  type: "LOGIN",
  payload,
});

export const logout = () => ({
  type: "LOG_OUT",
});

export const addToCart = (payload) => ({
  type: "ADD_TO_CART",
  payload,
});
