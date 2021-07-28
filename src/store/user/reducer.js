import { REQUEST_USER_INFO } from "./actionTypes";
const INIT_STATE = {
  userInfo: {},
}
const User = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REQUEST_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default User;
