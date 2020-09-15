import "whatwg-fetch";
import { useState, useEffect } from "react";
import { LISTS, TMDB_API_KEY, TMDB_API_URL } from "utils/constants";
import { filterMoviesByListName, CSV, calcMoviesAvgsRates } from "utils/helpers";

// A simple hook for fetching data
// https://medium.com/better-programming/learn-to-create-your-own-usefetch-react-hook-9cc31b038e53
export const useFetch = (fetchPromise , options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { params = [], skip = false} = options;

  useEffect(fetching, []);

  function fetching() {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetchPromise(...params);
        const json = await res.json();
        if (!signal.aborted) {
          setData(json);
          setSuccess(true);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    if(!skip) {
      doFetch();
    }

    return () => {
      abortController.abort();
    };
  }

  return { data, loading, error, success };
};


// Load init data from the csv file
export const loadRawDataFromCsvFile = async () => {
  // fetch csv file content
  const file = require("data/movies.csv");
  const response = await fetch(file);
  if (response.ok === false) throw response;

  // read data
  const reader = response.body.getReader();
  const result = await reader.read();

  // convert to csv raw
  const decoder = new TextDecoder(); // default 'utf-8' or 'utf8'
  const raw = decoder.decode(result.value);

  // parse csv to an array of objects
  const parsedMovies = CSV.parse(raw);

  // Add/Calculate average rates dynamically
  const calculatedAvgMovies = calcMoviesAvgsRates(parsedMovies);

  // separate movies by lists ids
  const movies = {};
  for (const listId in LISTS) {
    movies[listId] = filterMoviesByListName(calculatedAvgMovies, listId);
  }

  return movies;
};


// Fetch movie by id
export const fetchMovie = (imdbId) => {
  const url = new URL(`${TMDB_API_URL}/movie/${imdbId}`);
  url.searchParams.append("api_key", TMDB_API_KEY);
  url.searchParams.append("append_to_response", "credits,videos");

  return fetch(url);
};
