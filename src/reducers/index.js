import { combineReducers } from "redux";
import tasks from "./tasks";
import auth from "./auth";

export const rootReducer = combineReducers({
  tasks,
  auth
});
