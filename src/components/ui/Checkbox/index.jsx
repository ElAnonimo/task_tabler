import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Checkbox = ({ title, name, onChange, isChecked }) => (
  <div className={styles.wrapper}>
    {title && (
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
    )}
    <input
      id={name}
      type="checkbox"
      onChange={onChange}
      className={styles.input}
      name={name}
      checked={isChecked}
    />
  </div>
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default Checkbox;
