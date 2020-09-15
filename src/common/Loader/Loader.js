import React from "react";
import { Spinner } from "common";
import styles from "./Loader.module.scss";

const Loader = ({ text, ...res }) => {
  return (
    <div className={styles.loader}>
      <Spinner {...res} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Loader;
