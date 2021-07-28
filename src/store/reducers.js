import { combineReducers } from "redux";

// Front
import MainReducer from "./main/reducer";
import UserReducer from "./user/reducer";

const rootReducer = combineReducers({
  MainReducer,
  UserReducer,
});

export default rootReducer;
