import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import MoviesListPage from "pages/MoviesListPage";
import MoviePage from "pages/MoviePage";
import AboutPage from "pages/AboutPage";
import { ErrorMessage } from "common";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/lists/:listId">
        <MoviesListPage />
      </Route>
      <Route path="/movies/:imdbId">
        <MoviePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route>
        <ErrorMessage message="Page Not Found !" />
      </Route>
    </Switch>
  );
}

export default Routes;
