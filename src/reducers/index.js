import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import docReducer from "./docReducer";
import ratesReducer from "./ratesReducer";
export default combineReducers({
  news: newsReducer,
  docs: docReducer,
  rates: ratesReducer
});
