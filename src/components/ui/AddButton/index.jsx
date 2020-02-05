import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import { ReactComponent as IconAdd } from "../../../images/add.svg";

const AddButton = ({ onClick }) => (
  <div className={styles.wrapper}>
    <button onClick={onClick} className={styles.addBtn}>
      <IconAdd />
    </button>
  </div>
);

AddButton.propTypes = {
  onClick: PropTypes.func
};

export default AddButton;
