import { GET_USER, SET_LOGGED } from "./types";
import axios from "axios";
export const logUser = data => async dispatch => {
  setLogged();
  try {
    const request = await axios.post("http://localhost:5000/users/login", data);
    const response = await request;
    console.log(response);
    dispatch({
      type: GET_USER,
      payload: response
    });
  } catch (e) {
    console.log(e);
  }
};
export const setLogged = () => {
  return {
    type: SET_LOGGED
  };
};
