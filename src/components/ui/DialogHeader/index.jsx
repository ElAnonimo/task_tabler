import React from "react";
import PropTypes from "prop-types";
import CloseButton from "../CloseButton";
import styles from "./index.module.scss";

const UiDialogHeader = ({ title, onClose }) => (
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div className={styles.title}>{title}</div>
      <CloseButton onClick={onClose} />
    </div>
  </div>
);

UiDialogHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default UiDialogHeader;
