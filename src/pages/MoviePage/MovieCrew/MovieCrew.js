import React from "react";
import styles from "./MovieCrew.module.scss";

const MovieCrew = ({ director, writers }) => {
  return (
    <div className={styles.crew}>
      <dl className={styles.director}>
        <dt>Director</dt>
        <dd>{director.name}</dd>
      </dl>
      <dl className={styles.writers}>
        <dt>Writers</dt>
        <dd>
          {writers.slice(0, 2).map(({ credit_id, name, job }) => {
            return (
              <span key={credit_id}>
                {name} {job && <i>{`(${job})`}</i>}
              </span>
            );
          })}
          {writers.length > 2 && (
            <span className={styles.moreWriters}>
              {" "} ... And {writers.length - 2} More Writer(s)
            </span>
          )}
        </dd>
      </dl>
    </div>
  );
};

export default MovieCrew;
