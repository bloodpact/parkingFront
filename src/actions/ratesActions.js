import { GET_RATES, SET_LOADING } from "./types";
import rates from "./rates";
export const getRates = () => dispatch => {
  setLoading();
  dispatch({
    type: GET_RATES,
    payload: rates
  });
};
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
