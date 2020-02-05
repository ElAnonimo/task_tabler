import React from "react";
import styles from "./index.module.scss";

const UiTooltip = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
    <div className={styles.tooltip}>
      <span className={styles.text}>Changed by Admin</span>
    </div>
  </div>
);

export default UiTooltip;
