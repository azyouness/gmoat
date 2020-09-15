import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdArrowBack as GoBackIcon } from "react-icons/md";
import { useDispatch, addDetailedMovieAction } from "storeProvider/actions";
import { useSelector, getDetailedMovieById, getMovieById } from "storeProvider/selectors";
import { useFetch, fetchMovie } from "api";
import {Loader, ErrorMessage, DocTitle} from "common";
import Movie from "./Movie";
import styles from "./MoviePage.module.scss";

const MoviePage = () => {
  const history = useHistory();
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(getMovieById, [imdbId]);
  const details = useSelector(getDetailedMovieById, [imdbId]);
  const { data, error, loading, success } = useFetch(
    fetchMovie, 
    { params: [imdbId], skip:  !movie || !!details }
  );

  const saveDetailedMovieOnFetchSuccess = success => () => {
    if(success) dispatch(addDetailedMovieAction(data));
  };

  useEffect(saveDetailedMovieOnFetchSuccess(success), [success]);

  if (loading) return <Loader text={`Loading movie data ...`} />;
  if (error) return <ErrorMessage message="Something wrong please refresh or try later" />;
  if (!details) return <ErrorMessage message="Movie not found !" />;

  return (
    <div className={styles.page}>
      <DocTitle>GMOAT - {movie.title}</DocTitle>
      <div className={styles.container}>
        {history.location.key 
        ? <button className={styles.goBack} title="Go back to movies list" onClick={e => history.goBack()}>
            <GoBackIcon />
          </button> 
        : null}
        
        <Movie movie={movie} details={details} />
      </div>
    </div>
  );
};

export default MoviePage;
