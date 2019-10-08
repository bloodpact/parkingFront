import { GET_NEWS, NEWS_ERROR, SET_LOADING, GET_CURRENT_PAGE } from "./types";
export const getNews = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("https://fierce-bastion-22580.herokuapp.com/news");
    const data = await res.json();
    dispatch({
      type: GET_NEWS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: NEWS_ERROR,
      payload: e
    });
  }
};
export const getCurrentPage = page => dispatch => {
  dispatch({ type: GET_CURRENT_PAGE, payload: page });
};
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
