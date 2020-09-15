import React from "react";
import styles from "./MovieHeader.module.scss";

const MovieHeader = ({ title, releaseDate, runtime, genres = [] }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>
        {title} <span className={styles.year}>{new Date(releaseDate).getFullYear()}</span>
      </h2>

      <ul className={styles.details}>
        <li className={styles.releaseDate}>
          {new Date(releaseDate).toLocaleDateString()}
        </li>
        <li className={styles.runtime}>
          <time dateTime={runtime}>{runtime} min</time>
        </li>
        <li className={styles.genres}>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MovieHeader;
