import { GET_USER, SET_LOGGED } from "../actions/types";

const initialState = {
  logged: false,
  user: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      console.log(action.payload);
      return {
        ...state,
        logged: false
      };
    case GET_USER:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        logged: true
      };
    default:
      return state;
  }
};
