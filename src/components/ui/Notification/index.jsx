import React, { Component } from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";

class UiNotification extends Component {
  render() {
    const { onShow } = this.props;

    return (
      <div className={styles.wrapper}>
        <span className={styles.btnClose} onClick={() => onShow(false)}>
          &times;
        </span>
        <strong>Success! </strong>
        You have added a new task
      </div>
    );
  }
}

UiNotification.propTypes = {
  onShow: PropTypes.func
};

export default UiNotification;
