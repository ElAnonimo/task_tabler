import { connect } from "react-redux";
import TaskDialogForm from "./index.jsx";
import { addTask, closeNewTaskDialog } from "../../../actions/tasks";

const mapStateToProps = state => ({
  taskDialog: state.tasks.taskDialog
});

const mapDispatchToProps = {
  addTask,
  closeNewTaskDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDialogForm);
