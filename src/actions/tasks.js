import { loadData, createTask, editTask } from "../api/tasks";
import { tasks as actionTypes } from "../constants/action-types";
import Cookie from "js-cookie";

export const loadStart = () => ({
  type: actionTypes.LOAD_TASKS_START,
  loading: true
});

export const loadSuccess = () => ({
  type: actionTypes.LOAD_TASKS_SUCCESS,
  loading: false
});

export const loadTasks = options => async dispatch => {
  dispatch(loadStart());

  const { tasks, total_task_count } = await loadData(options);

  const totalPageCount = Math.ceil(total_task_count / 3);

  dispatch({
    type: actionTypes.SET_TASKS_DATA,
    tasks,
    totalPageCount,
    options
  });

  dispatch(loadSuccess());
};

export const changeSorted = newSorted => async (dispatch, getState) => {
  const options = getState().tasks.options;

  options.sort_field = newSorted[0].id;
  options.sort_direction = newSorted[0].desc ? "desc" : "asc";

  dispatch(loadTasks(options));
};

export const changePage = newPage => async (dispatch, getState) => {
  const options = getState().tasks.options;

  options.page = newPage;

  dispatch(loadTasks(options));
};

export const openNewTaskDialog = () => {
  return {
    type: actionTypes.OPEN_NEW_TASK_DIALOG
  };
};

export const closeNewTaskDialog = () => {
  return {
    type: actionTypes.CLOSE_NEW_TASK_DIALOG
  };
};

export const openEditTaskDialog = data => dispatch => {
  const token = Cookie.get("token");

  if (token) {
    return dispatch({
      type: actionTypes.OPEN_EDIT_TASK_DIALOG,
      data
    });
  }

  return;
};

export const closeEditTaskDialog = () => {
  return {
    type: actionTypes.CLOSE_EDIT_TASK_DIALOG
  };
};

export const showNotification = status => ({
  type: actionTypes.SET_STATUS_NOTIFICATION,
  status
});

export const addTask = newTask => async (dispatch, getState) => {
  const taskDialog = getState().tasks.taskDialog;
  const options = getState().tasks.options;

  if (taskDialog.type === "new") {
    await createTask(newTask);
    dispatch(showNotification(true));
  } else {
    await editTask(newTask);
  }

  await dispatch(loadTasks(options));

  dispatch(closeNewTaskDialog());
};
