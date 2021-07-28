import { GET_GLOBAL_DATA } from "./actionTypes";

const INIT_STATE = {
  globalData: 12,
};

const Main = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      return {
        ...state,
        globalData: action.payload,
      };
    default:
      return state;
  }
};

export default Main;
