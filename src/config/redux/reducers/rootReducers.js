import { combineReducers } from "redux";
import { userReducer } from "./userReducers";

const rootReducer = combineReducers({
  auth: userReducer,
});

export default rootReducer;
