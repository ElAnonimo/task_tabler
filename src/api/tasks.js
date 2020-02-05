import axios from "axios";
import Cookie from "js-cookie";
import { API_HOST, DEVELOPER_NAME } from "../constants/tasks";

export const loadData = async options => {
  let res = await axios.get(API_HOST, {
    params: {
      developer: DEVELOPER_NAME,
      ...options,
      page: options.page + 1
    }
  });

  return res.data.message;
};

export const createTask = async task => {
  const { username, email, text } = task;
  const form = new FormData();
  form.append("username", username);
  form.append("email", email);
  form.append("text", text);

  let res = await axios.post(`${API_HOST}create`, form, {
    params: {
      developer: DEVELOPER_NAME
    }
  });

  return res.data.message;
};

export const editTask = async task => {
  const { id, text, status } = task;
  const token = Cookie.get("token");

  const form = new FormData();
  form.append("token", token);
  form.append("status", status);
  form.append("text", text);

  const res = await axios.post(`${API_HOST}edit/${id}/`, form, {
    params: {
      developer: DEVELOPER_NAME
    }
  });

  return res.data.message;
};
