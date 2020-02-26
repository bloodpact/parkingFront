import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import docReducer from "./docReducer";
import ratesReducer from "./ratesReducer";
import userReducer from "./userReducer";
export default combineReducers({
  news: newsReducer,
  docs: docReducer,
  user: userReducer,
  rates: ratesReducer
});
