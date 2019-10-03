import { GET_DOCS, DOCS_ERROR, SET_LOADING } from "../actions/types";
const initialState = {
  docs: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCS:
      return { ...state, docs: action.payload, loading: false };
    case DOCS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
