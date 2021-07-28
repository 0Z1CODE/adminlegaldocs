import {
    REQUEST_USER_INFO,
    GET_USER_INFO,

  } from "./actionTypes";

  export const requestUserInfo = (data) => {
    return { type: REQUEST_USER_INFO, payload: data};
  };
  export const getUserInfo = (data) => {
    return { type: GET_USER_INFO, payload: data};
  };
