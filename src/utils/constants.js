// API constants
export const TMDB_API_KEY       = "a030aa1fc48390eeab0b759d862f2a29";
export const TMDB_API_URL       = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_URL     = "https://image.tmdb.org/t/p";
export const TMDB_POSTER_SIZE       = "w500"; // w400 w300 -> w...
export const TMDB_ACTOR_IMAGE_SIZE  = "w138_and_h175_face";

export const CSV_DELIMITER = ";";

export const YT_THUMBNAIL_QUALITY = {
  DEFAULT: "default",
  HIGH: "hqdefault",
  MAX: "maxresdefault",
  MEDIUM: "mqdefault",
  LOW: "sddefault",
};

// Movies Lists
export const LISTS = {
  average: { name: "Average", rankProp: "avg_rank", rateProp: "avg_rate", },
  imdb: { name: "IMDB", rankProp: "imdb_rank", rateProp: "imdb_rate", },
  metacritic: { name: "Metacritic", rankProp: "mc_rank", rateProp: "mc_rate", },
  rotten_tomatoes: { name: "Rotten Tomatoes", rankProp: "rt_rank", rateProp: "rt_rate", },
};
