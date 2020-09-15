import React from 'react';
import styles from "./MovieSection.module.scss";

const MovieSection = ({ title, children }) => {
  return (
    <div className={styles.section}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MovieSection;