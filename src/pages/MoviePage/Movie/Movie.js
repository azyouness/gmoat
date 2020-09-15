import React from 'react';
import { TMDB_IMAGE_URL, TMDB_POSTER_SIZE, LISTS } from "utils/constants";
// page components
import MovieSection from "./../MovieSection";
import MoviePoster from "./../MoviePoster";
import MovieHeader from "./../MovieHeader/MovieHeader";
import MovieOverview from "./../MovieOverview";
import MovieRates from "./../MovieRates";
import MovieCrew from "./../MovieCrew";
import MovieCast from "./../MovieCast";
import MovieVideos from "./../MovieVideos";

import styles from "./Movie.module.scss";

const Movie = ({ movie, details }) => {
  const { title, poster_path, genres, runtime, release_date, overview, credits: { crew, cast }, videos } = details;
  const poster = `${TMDB_IMAGE_URL}/${TMDB_POSTER_SIZE}/${poster_path}`;
  const director = crew.find(({ department }) => department === 'Directing');
  const writers = crew.filter(({ department }) => department === 'Writing');
  
  const rates = [];
  for(const listId in LISTS) {
    const { name, rankProp, rateProp } = LISTS[listId];
    rates.push({ name, rate: Number(movie[rateProp]), rank: Number(movie[rankProp]) });
  }

  return (
    <div className={styles.movie}>
      <div className={styles.col}>
        <MoviePoster imdbId={movie.imdb_id} title={title} image={poster} />
      </div>
      <div className={styles.col}>
        <MovieSection>
          <MovieHeader title={title} releaseDate={release_date} runtime={runtime} genres={genres} />
        </MovieSection>
        <MovieSection>
          <MovieOverview overview={overview} />
        </MovieSection>
        <MovieSection title="Ranks &amp; Rating">
          <MovieRates rates={rates} />
        </MovieSection>
        <MovieSection title="Featured Crew">
          <MovieCrew director={director} writers={writers} />
        </MovieSection>
        <MovieSection title="Top Billed Cast">
          <MovieCast actors={cast.slice(0, 5)} />
        </MovieSection>
        <MovieSection title="Videos">
          <MovieVideos videos={videos.results.slice(0, 4)} />
        </MovieSection>
      </div>
    </div>
  );
};

export default Movie;