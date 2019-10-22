import { GET_RATES, SET_LOADING } from "../actions/types";

const initialState = {
  rates: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return { ...state, rates: action.payload };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
