import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import TaskForm from "../TaskForm";
import DialogHeader from "../DialogHeader";

const customStyles = {
  overlay: {
    zIndex: "10"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "600px",
    marginRight: "-50%",
    padding: "0",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class UiTaskDialogForm extends Component {
  handleSaveTask = task => {
    this.props.addTask(task);
  };

  render() {
    const {
      type,
      props: { open },
      data
    } = this.props.taskDialog;
    const { closeNewTaskDialog } = this.props;

    const isNew = type === "new";

    return (
      <Modal
        isOpen={open}
        onRequestClose={closeNewTaskDialog}
        style={customStyles}
        contentLabel="Task"
      >
        <DialogHeader title={`${type} task`} onClose={closeNewTaskDialog} />
        <TaskForm isNew={isNew} task={data} onSave={this.handleSaveTask} />
      </Modal>
    );
  }
}

UiTaskDialogForm.propTypes = {
  taskDialog: PropTypes.object,
  closeNewTaskDialog: PropTypes.func,
  addTask: PropTypes.func
};

export default UiTaskDialogForm;
