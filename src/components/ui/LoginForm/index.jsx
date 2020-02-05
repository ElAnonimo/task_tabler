import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

class UiForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: ""
      },
      errors: {}
    };
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };

  validateForm = () => {
    const { username, password } = this.state.data;

    let errors = {};

    if (username.length === 0) {
      errors.username = "Name can't be empty";
    }

    if (password.length === 0) {
      errors.password = "Password can't be empty";
    }

    return errors;
  };

  handleSubmit = event => {
    const errors = this.validateForm();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
      event.preventDefault();

      return;
    }

    this.setState({
      errors: {}
    });

    const { data } = this.state;

    this.props.onSubmit(data);
    event.preventDefault();
  };

  render() {
    const {
      data: { username, password },
      errors
    } = this.state;
    const { errorMessage } = this.props;

    return (
      <form className={styles.wrapper} onSubmit={this.handleSubmit}>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <p className={styles.title}>Name</p>
        <input
          className={styles.input}
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
        <p className={styles.title}>Password</p>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <div className={styles.action}>
          <input className={styles.btnSave} type="submit" value="Login" />
        </div>
      </form>
    );
  }
}

UiForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func
};

export default UiForm;
