import React from "react";
import { DocTitle } from "common";
import MoviesLinkBox from "./MoviesLinkBox";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <DocTitle>GMOAT - Greatest Movies Of All Time</DocTitle>

      <div className={styles.col}>
        <div className={styles.cell}>
          <MoviesLinkBox 
            listId="average"
            to="/lists/average" 
            image="the-godfather.webp" 
            title="GMOAT" 
            caption={"List of \"Greatest Movies Of All Time\" ranked by the calculating the average movies ratings of the most popular movies websites (IMDB, Metacritic, ...)"}
          />
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.cell}>
          <MoviesLinkBox 
            to="/lists/imdb" 
            image="the-shawshank-redemption.webp" 
            title="Internet Movie Database" 
            caption={"Top rated movies by <i>imdb.com</i>"}
          />
        </div>
        <div className={styles.cell}>
          <MoviesLinkBox 
            to="/lists/rotten_tomatoes" 
            image="black-panther.webp" 
            title="Rotten Tomatoes" 
            caption={"Top rated movies by <i>rottentomatoes.</i>"}
          />
        </div>
        <div className={styles.cell}>
          <MoviesLinkBox 
            to="/lists/metacritic" 
            image="citizen-kane.webp" 
            title="Metacritic" 
            caption={"Top rated movies by <i>metacritic.com</i>"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
