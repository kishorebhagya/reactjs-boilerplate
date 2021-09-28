import { createAction, createReducer } from "redux-act";
import { BASE_URL } from "../../config/api";
import axios from "axios";

//Actions
const FETCH_USERS_INIT = createAction("FETCH_USERS_INIT");
const FETCH_USERS_SUCCESS = createAction("FETCH_USERS_SUCCESS");
const FETCH_USERS_FAILURE = createAction("FETCH_USERS_FAILURE");

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    dispatch(FETCH_USERS_INIT());
    axios
      .get(`${BASE_URL}/users`)
      .then((result) => dispatch(FETCH_USERS_SUCCESS(result.data)))
      .catch((err) => dispatch(FETCH_USERS_FAILURE(err.response.data || err)));
  };
};

const initialState = {
  isFetching: false,
  message: "",
  result: null,
  error: null,
};

//Reducers
const sample = createReducer(
  {
    [FETCH_USERS_INIT]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [FETCH_USERS_SUCCESS]: (state, payload) => ({
      ...state,
      result: payload,
    }),
    [FETCH_USERS_FAILURE]: (state, payload) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  initialState
);

export default sample;
