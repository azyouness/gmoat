import React from "react";
import { TMDB_IMAGE_URL, TMDB_ACTOR_IMAGE_SIZE } from "utils/constants";
import ImageNotFound from "assets/imageNotFound.png";
import styles from "./MovieCast.module.scss";

const MovieCast = ({ actors = [] }) => {
  return (
    <ul className={styles.actors}>
      {actors.map(({ id, name, profile_path, character }, i) => {
        return (
          <li key={id} className={styles.actor}>
            <img 
              src={profile_path ? `${TMDB_IMAGE_URL}/${TMDB_ACTOR_IMAGE_SIZE}/${profile_path}` : ImageNotFound} 
              alt={name} 
            />
            <div className={styles.names}>
              <span className={styles.realName}>{name}</span>
              <span className={styles.characterName}>{character}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
