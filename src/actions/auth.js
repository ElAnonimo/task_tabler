import axios from "axios";
import Cookie from "js-cookie";
import { API_HOST, DEVELOPER_NAME } from "../constants/tasks";
import { tasks as actionTypes } from "../constants/action-types";

export const isLoggedIn = () => async dispatch => {
  const token = Cookie.get("token");

  if (token) {
    return dispatch({
      type: actionTypes.SET_IS_LOGIN,
      isLogin: true
    });
  }
};

export const logout = () => async dispatch => {
  Cookie.remove("token");

  dispatch({
    type: actionTypes.SET_IS_LOGIN,
    isLogin: false
  });
};

export const login = ({ username, password }) => async dispatch => {
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const res = await axios.post(`${API_HOST}login`, form, {
    params: {
      developer: DEVELOPER_NAME
    }
  });

  if (res.data.status === "error") {
    return dispatch({
      type: actionTypes.SET_ERROR_LOGIN,
      errorMessage: res.data.message.password
    });
  }

  Cookie.set("token", res.data.message.token);

  dispatch({
    type: actionTypes.SET_IS_LOGIN,
    isLogin: true
  });
};
