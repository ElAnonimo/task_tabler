import { tasks as actionTypes } from "../constants/action-types";

const defaultState = {
  options: {
    page: 0,
    sort_field: "username",
    sort_direction: "desc"
  },
  tasks: [],
  totalPageCount: 0,
  taskDialog: {
    type: "new",
    props: {
      open: false
    },
    data: null
  },
  loading: false,
  isShowNotification: false
};

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATUS_NOTIFICATION:
      return {
        ...state,
        isShowNotification: action.status
      };
    case actionTypes.SET_TASKS_DATA:
      return {
        ...state,
        options: action.options,
        tasks: action.tasks,
        totalPageCount: action.totalPageCount
      };
    case actionTypes.OPEN_NEW_TASK_DIALOG: {
      return {
        ...state,
        taskDialog: {
          type: "new",
          props: {
            open: true
          },
          data: null
        }
      };
    }
    case actionTypes.CLOSE_NEW_TASK_DIALOG: {
      return {
        ...state,
        taskDialog: {
          type: "new",
          props: {
            open: false
          },
          data: null
        }
      };
    }
    case actionTypes.OPEN_EDIT_TASK_DIALOG: {
      return {
        ...state,
        taskDialog: {
          type: "edit",
          props: {
            open: true
          },
          data: action.data
        }
      };
    }
    case actionTypes.CLOSE_EDIT_TASK_DIALOG: {
      return {
        ...state,
        taskDialog: {
          type: "edit",
          props: {
            open: false
          },
          data: null
        }
      };
    }
    case actionTypes.LOAD_TASKS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.LOAD_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default tasks;
