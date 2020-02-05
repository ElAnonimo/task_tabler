import { connect } from "react-redux";
import TaskPage from "./index.jsx";
import {
  loadTasks,
  openEditTaskDialog,
  openNewTaskDialog,
  changeSorted,
  changePage,
  showNotification
} from "../../../actions/tasks";

const mapStateToProps = state => ({
  data: state.tasks.tasks,
  options: state.tasks.options,
  totalPageCount: state.tasks.totalPageCount,
  loading: state.tasks.loading,
  isLogin: state.auth.isLogin,
  isShowNotification: state.tasks.isShowNotification
});

const mapDispatchToProps = {
  loadTasks,
  openEditTaskDialog,
  openNewTaskDialog,
  changeSorted,
  changePage,
  showNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
