import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as IconEdit } from "../../../images/edit.svg";
import { ReactComponent as IconDone } from "../../../images/done.svg";
import { ReactComponent as IconNotDone } from "../../../images/not-done.svg";
import styles from "./index.module.scss";
import Tooltip from "../Tooltip";

export const DEFAULT_CHANGED_STATUS = [1, 11];
export const DEFAULT_DONE_STATUS = [10, 11];

export const isIncludesStatus = (arr, status) => arr.includes(status);

const UiConditions = ({ status }) => {
  const isChanged = isIncludesStatus(DEFAULT_CHANGED_STATUS, status);
  const isDone = isIncludesStatus(DEFAULT_DONE_STATUS, status);

  return (
    <div className={styles.wrapper}>
      {isChanged ? (
        <Tooltip>
          <div
            className={classNames(styles.icon, {
              [styles.done]: isChanged
            })}
          >
            <IconEdit />
          </div>
        </Tooltip>
      ) : (
        <div
          className={classNames(styles.icon, {
            [styles.done]: isChanged
          })}
        >
          <IconEdit />
        </div>
      )}

      <div
        className={classNames(styles.icon, {
          [styles.done]: isDone
        })}
      >
        {isDone ? <IconDone /> : <IconNotDone />}
      </div>
    </div>
  );
};

UiConditions.propTypes = {
  status: PropTypes.number
};

export default UiConditions;
