import { GET_DOCS, DOCS_ERROR, SET_LOADING } from "./types";
export const getDocs = () => async dispatch => {
  setLoading();
  try {
    const res = await fetch("/docs");
    const data = await res.json();
    dispatch({
      type: GET_DOCS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: DOCS_ERROR,
      payload: e
    });
  }
};
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
