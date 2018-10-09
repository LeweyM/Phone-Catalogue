import { combineReducers } from "redux";
import popupReducer from "./popupReducer.js";
import apiReducer from "./apiReducer.js";

export default combineReducers({
  popupReducer,
  apiReducer
});
