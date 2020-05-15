import { GET_USER, SET_LOGGED, UPD_PASS, SET_ERROR, UPD_EMAIL } from "./types";
import axios from "axios";
export const logUser = data => async dispatch => {
  try {
    setLogged();
    const request = await axios.post("http://localhost:5000/users/login", data);
    const response = await request;
    dispatch({
      type: GET_USER,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: SET_ERROR,
      payload: e.response.data.msg
    });
  }
};
export const askAct = async data => {
  try {
    await axios.post("http://localhost:5000/email/", data);
  } catch (e) {
    console.log(e);
  }
};
export const saveEmail = async data => {
  try {
    await axios.post("http://localhost:5000/email/update", data);
  } catch (e) {
    console.log(e);
  }
};
export const updPass = data => async dispatch => {
  setLogged();
  try {
    const request = await axios.post(
      "http://localhost:5000/users/passUpdate",
      data
    );
    const response = await request;
    dispatch({
      type: UPD_PASS,
      payload: response.data
    });
  } catch (e) {
    console.log(e);
  }
};
export const updEmail = data => async dispatch => {
  setLogged();
  try {
    const request = await axios.post(
      "http://localhost:5000/users/emailUpdate",
      data
    );
    const response = await request;
    dispatch({
      type: UPD_EMAIL,
      payload: response.data
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
