import { DOCS_ERROR, GET_DATA_TABLE, SET_LOADING } from "../actions/types";
const initialState = {
  dataTable: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_TABLE:
      return { ...state, dataTable: action.payload, loading: false };
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
