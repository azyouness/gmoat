import { useStore } from "storeProvider";

// accepts a selector callback and aa array of params
export const useSelector = (selector, params = []) => {
  const { store } = useStore();
  return selector(store, ...params); // params is an array
};

export const getMoviesByList = ({ movies = {} }, listId) => {
  return movies[listId] || [];
};

export const getMovieById = ({ movies }, id) => {
  let movie;
  for (const listId in movies) {
    if ((movie = movies[listId].find(({ imdb_id }) => imdb_id === id))) 
      break;
  }
  return movie;
};

export const getDetailedMovieById = ({ detailedMovies }, id) => {
  return detailedMovies.find(({ imdbId }) => imdbId === id);
};

export const getSort = ({ sort }) => sort;

export const getSearchKeyword = ({ searchKeyword }) => searchKeyword;
