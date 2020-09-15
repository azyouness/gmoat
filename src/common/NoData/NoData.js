import React from 'react';
import { IoIosTrash as NoDataIcon } from "react-icons/io";
import styles from "./NoData.module.scss";

const NoData = ({ message = "No data found !" }) => {
  return (
    <div className={styles.noData}>
      <NoDataIcon className={styles.icon} />
      <p className={styles.message}>{message}</p>
    </div>
  );
};


export default NoData;