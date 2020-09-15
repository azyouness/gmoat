import React from "react";
import { IoMdStarOutline as StarIcon } from "react-icons/io";
import styles from "./ListerBlock.module.scss";

const ListerBlock = ({ title, children }) => {
  return (
    <article className={styles.lister}>
      <h3 className={styles.title}>
        <span className={styles.text}>{title}</span>
        <StarIcon className={styles.icon} />
      </h3>
      <div className={styles.content}>
        {children}
      </div>
    </article>
  );
};

export default ListerBlock;
