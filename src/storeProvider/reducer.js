import {
  LOAD_MOVIES,
  ADD_DETAILED_MOVIE,
  UPDATE_SEARCH,
  UPDATE_SORT,
} from "storeProvider/actions";

// Reducers
export const rootReducer = (state, action) => {
  // console.log("Action Dispatch", action);
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };

    case ADD_DETAILED_MOVIE:
      return {
        ...state,
        detailedMovies: [
          ...state.detailedMovies,
          {
            ...action.movie,
            imdbId: action.movie.imdb_id,
          },
        ],
      };

    case UPDATE_SEARCH:
      return {
        ...state,
        searchKeyword: action.keyword,
      };

    case UPDATE_SORT:
      return {
        ...state,
        sort: {
          by: action.by || "rank",
          asc: typeof action.asc === "undefined" ? true : action.asc,
        },
      };

    default:
      return state;
  }
};
