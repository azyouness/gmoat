import React from "react";
import { IoIosCloseCircleOutline as ErrorIcon } from "react-icons/io";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message = "Something wrong !!" }) => {
  return (
    <div className={styles.error}>
      <ErrorIcon className={styles.icon} />
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
