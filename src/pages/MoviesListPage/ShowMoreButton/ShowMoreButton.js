import React from "react";
import { FaEllipsisV as EllipsisIcon } from "react-icons/fa";
import styles from "./ShowMoreButton.module.scss";

const ShowMoreButton = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children || <span><EllipsisIcon className={styles.icon} /> Show more movies</span>}
    </button>
  );
};

export default ShowMoreButton;
