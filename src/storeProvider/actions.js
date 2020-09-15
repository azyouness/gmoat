import { useStore } from "storeProvider";

// accepts a selector callback and aa array of params
export const useDispatch = () => {
  const { dispatch } = useStore();
  return dispatch; // params is an array
};

// Actions
export const LOAD_MOVIES = "LOAD_MOVIES";
export const loadMoviesAction = (movies) => ({
  type: LOAD_MOVIES,
  movies,
});

export const ADD_DETAILED_MOVIE = "ADD_DETAILED_MOVIE";
export const addDetailedMovieAction = (movie) => ({
  type: ADD_DETAILED_MOVIE,
  movie,
});

export const UPDATE_SORT = "UPDATE_SORT";
export const updateSort = (by = "rank", asc = true) => ({
  type: UPDATE_SORT,
  by,
  asc,
});

export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const updateSearch = keyword => ({
  type: UPDATE_SEARCH,
  keyword,
});