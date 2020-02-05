import { tasks as actionTypes } from "../constants/action-types";

const defaultState = {
  errorMessage: "",
  isLogin: false
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR_LOGIN:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    case actionTypes.SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default auth;
