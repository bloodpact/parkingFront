import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import docReducer from "./docReducer";
export default combineReducers({
  news: newsReducer,
  docs: docReducer
});
