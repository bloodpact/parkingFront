import {
  GET_CURRENT_PAGE,
  GET_NEWS,
  NEWS_ERROR,
  SET_LOADING
} from "../actions/types";
const initialState = {
  news: null,
  loading: false,
  error: null,
  perPage: 5,
  curPage: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, news: action.payload, loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_PAGE:
      return {
        ...state,
        curPage: action.payload
      };
    case NEWS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
