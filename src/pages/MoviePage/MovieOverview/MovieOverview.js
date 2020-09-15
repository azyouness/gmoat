import React from "react";
import styles from "./MovieOverview.module.scss";

const MovieOverview = ({ overview }) => {
  return <p className={styles.overview}>{overview}</p>;
};

export default MovieOverview;
