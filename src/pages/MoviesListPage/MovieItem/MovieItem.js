import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { LISTS } from "utils/constants";
import { getImagePath } from "utils/helpers";
import { WebpImg } from "common";
import RateBox from "./../RateBox";
import TrailerBox from "./../TrailerBox";
import styles from "./MovieItem.module.scss";

const MovieItem = ({ listId, movie, onTrailerClick }) => {
  const { rateProp, rankProp } = LISTS[listId];
  const { imdb_id, title, year, desc, trailer_id, image, [rateProp]: rate, [rankProp]: rank } = movie;

  const handleTrailerClick = movie => e => {
    e.preventDefault();
    onTrailerClick(movie);
  };

  return (
    <article className={styles.item}>
      <WebpImg className={styles.bgImage} src={getImagePath(image)} alt={title} />
      <div className={styles.container}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            <RouterLink to={`/movies/${imdb_id}`}>{title} - {year}</RouterLink>
          </h3>
          <p className={styles.desc}>{desc}</p>
          <ul className={styles.values}>
            <li>
              <RateBox type="rank" value={rank} />
            </li>
            <li>
              <RateBox type="rate" value={rate} />
            </li>
          </ul>
        </div>
        <div className={styles.trailer}>
          <TrailerBox id={trailer_id} title={title} onClick={handleTrailerClick(movie)} />
        </div>
      </div>
    </article>
  );
};

export default MovieItem;