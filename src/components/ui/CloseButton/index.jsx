import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as IconClose } from "../../../images/close.svg";

const CloseButton = ({ ...props }) => (
  <button className={styles.btn} {...props}>
    <IconClose />
  </button>
);

export default CloseButton;
