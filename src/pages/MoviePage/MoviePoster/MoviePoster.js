import React from 'react';
import styles from "./MoviePoster.module.scss";

const MoviePoster = ({ imdbId, title, image }) => {
  return (
    <figure className={styles.poster}>
      <img src={image} alt={title + ' Poster'} />
      <figcaption>
        Find more informations (Full Cast &amp; Crew, Production Companies ...) {' '}
        <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank" rel='noreferrer noopener'>here (IMDB)</a> or {' '}
        <a href={`https://www.themoviedb.org/redirect?external_source=imdb_id&external_id=${imdbId}`} target="_blank" rel='noreferrer noopener'>here (TMDB)</a>
        .
      </figcaption>
    </figure>
  );
};

export default MoviePoster;