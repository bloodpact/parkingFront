import { GET_USER, SET_LOGGED, UPD_PASS, SET_ERROR } from "../actions/types";

const initialState = {
  logged: false,
  user: null,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return {
        ...state,
        logged: false,
        error: null
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        logged: true
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case UPD_PASS:
      return {
        ...state,
        user: action.payload,
        logged: true
      };
    default:
      return state;
  }
};
