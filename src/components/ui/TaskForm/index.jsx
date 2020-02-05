import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import { REGEX_FOR_VALIDATE_EMAIL } from "../../../constants/email";
import Checkbox from "../Checkbox";
import {
  DEFAULT_CHANGED_STATUS,
  DEFAULT_DONE_STATUS,
  isIncludesStatus
} from "../Condition";

const DEFAULT_DATA = {
  username: "",
  email: "",
  text: ""
};

class UiForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.isNew ? DEFAULT_DATA : props.task,
      errors: {},
      text: !props.isNew ? props.task.text : undefined
    };
  }

  isEditedText = () => this.state.data.text !== this.state.text;

  isNotChanged = () =>
    !isIncludesStatus(DEFAULT_CHANGED_STATUS, this.state.data.status);

  getNewStatus = (edited = false) => {
    const { status } = this.state.data;

    if ((status === 0 && edited) || (status === 1 && edited)) {
      return 1;
    } else if (status === 0 && !edited) {
      return 10;
    } else if ((status === 1 && !edited) || (status === 10 && edited)) {
      return 11;
    } else if (status === 10) {
      return 0;
    } else if (status === 11) {
      return 1;
    }
  };

  getData = () => {
    const data = {
      ...this.state.data,
      status: this.getNewStatus(true)
    };

    this.setState({
      data
    });

    return data;
  };

  handleChange = event => {
    const { type, value, name } = event.target;
    const isCheckbox = type === "checkbox";

    let checkboxValue;
    if (isCheckbox) {
      checkboxValue = this.getNewStatus();
    }

    this.setState({
      data: {
        ...this.state.data,
        [name]: isCheckbox ? checkboxValue : value
      }
    });
  };

  validateForm = () => {
    const { username, email, text } = this.state.data;

    let errors = {};

    if (username.length === 0) {
      errors.username = "Name can't be empty";
    }

    if (!REGEX_FOR_VALIDATE_EMAIL.test(String(email).toLowerCase())) {
      errors.email = "Please enter a valid email address";
    }

    if (text.length === 0) {
      errors.text = "Task can't be empty";
    }

    return errors;
  };

  handleSubmit = async event => {
    const errors = this.validateForm();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
      event.stopPropagation();
      event.preventDefault();

      return;
    }

    this.setState({
      errors: {}
    });

    let isEdited;

    if (!this.props.isNew && this.isNotChanged()) {
      isEdited = this.isEditedText();
    }

    this.props.onSave(isEdited ? this.getData() : this.state.data);

    event.stopPropagation();
    event.preventDefault();
  };

  render() {
    const {
      data: { username, email, text, status },
      errors
    } = this.state;
    const { isNew } = this.props;

    return (
      <form className={styles.wrapper} onSubmit={this.handleSubmit}>
        <p className={styles.title}>Name</p>
        <input
          className={styles.input}
          type="text"
          name="username"
          value={username}
          disabled={!isNew}
          onChange={this.handleChange}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
        <p className={styles.title}>Email</p>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          disabled={!isNew}
          onChange={this.handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <p className={styles.title}>Text</p>
        <textarea
          className={styles.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
        />
        {errors.text && <p className={styles.error}>{errors.text}</p>}
        {!isNew && (
          <Checkbox
            name="status"
            title="Task is done"
            isChecked={isIncludesStatus(DEFAULT_DONE_STATUS, status)}
            onChange={this.handleChange}
          />
        )}
        <div className={styles.action}>
          <input className={styles.btnSave} type="submit" value="Save" />
        </div>
      </form>
    );
  }
}

UiForm.propTypes = {
  isNew: PropTypes.bool,
  task: PropTypes.object,
  onSave: PropTypes.func
};

export default UiForm;
