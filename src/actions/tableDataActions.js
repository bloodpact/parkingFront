import { GET_DATA_TABLE, DOCS_ERROR, SET_LOADING } from "../actions/types";

export const getTableData = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("http://fierce-bastion-22580.herokuapp.com/data/");
    const data = await res.json();
    dispatch({
      type: GET_DATA_TABLE,
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
