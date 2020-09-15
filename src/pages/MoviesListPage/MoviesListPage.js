import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LISTS } from "utils/constants";
import { useSelector, getMoviesByList, getSearchKeyword, getSort } from "storeProvider/selectors";
import { DocTitle, Modal, YoutubeVideo, NoData } from "common";
import MovieItem from "./MovieItem";
import ShowMoreButton from "./ShowMoreButton";

const MoviesListPage = () => {
  const MAX_PER_PAGE = 10;
  const { listId } = useParams();
  const allMovies = useSelector(getMoviesByList, [listId]);
  const searchKeyword = useSelector(getSearchKeyword);
  const sort = useSelector(getSort);
  // components states
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovies, setSelectedMovies] = useState(allMovies);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [trailerModalMovie, setTrailerModalMovie] = useState(null);

  // update movies list everytime listId, search or sort changed
  useEffect(updateSelectedMovies, [listId, searchKeyword, sort.by, sort.asc]);

  const handleOpenTrailerModal = (movie) => {
    setIsTrailerModalOpen(true);
    setTrailerModalMovie(movie);
  };

  const handleCloseTrailerModal = () => {
    setIsTrailerModalOpen(false);
    setTrailerModalMovie(null);
  };

  function updateSelectedMovies() {
    // filter
    const result =
      searchKeyword.trim().length < 2
        ? allMovies
        : allMovies.filter(({ title }) =>
            title.toLowerCase().includes(searchKeyword.toLowerCase())
          );

    // sort
    setSelectedMovies(
      [...result].sort((a, b) => {
        const sortProp = sort.by === "rank" ? LISTS[listId].rankProp : "year";
        return sort.asc ? a[sortProp] - b[sortProp] : b[sortProp] - a[sortProp];
      })
    );

    // reset current page to 1
    setCurrentPage(1);
  }

  return (
    <React.Fragment>
      <DocTitle>GMOAT - {LISTS[listId]?.name} List</DocTitle>
      {/* Movies List */}
      <div>
      {selectedMovies.length ? selectedMovies.slice(0, currentPage * MAX_PER_PAGE).map((movie) => (
        <MovieItem
          key={movie.imdb_id}
          listId={listId}
          movie={movie}
          onTrailerClick={handleOpenTrailerModal}
        />
      )) : <NoData message="Empty movies list !" />}
      </div>

      {/* Show more button */}
      {currentPage * MAX_PER_PAGE < selectedMovies.length && (
        <ShowMoreButton onClick={(e) => setCurrentPage(currentPage + 1)} />
      )}

      {/* Trailer modal */}
      <Modal open={isTrailerModalOpen} onClose={handleCloseTrailerModal}>
        {trailerModalMovie && (
          <YoutubeVideo
            id={trailerModalMovie.trailer_id}
            title={trailerModalMovie.title}
          />
        )}
      </Modal>
    </React.Fragment>
  );
};

export default MoviesListPage;
