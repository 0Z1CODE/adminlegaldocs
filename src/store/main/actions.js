import {
    GET_GLOBAL_DATA,
    SET_GLOBAL_DATA,

  } from "./actionTypes";

  
  
  
  
  export const getGlobalData = (data) => {
    return { type: GET_GLOBAL_DATA, payload: data };
    // return { type: GET_GLOBAL_DATA, payload: data.Core.data };
  };
  export const setGlobalData = (data) => {
    return { type: SET_GLOBAL_DATA, payload: data };
  };
 
