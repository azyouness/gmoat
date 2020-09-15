import React from "react";
import { DocTitle } from "common";
import ListerBlock from "./ListerBlock";
import styles from "./AboutPage.module.scss";

const BlankLink = ({ href, children, ...rest }) => (
  <a href={href} target="_blank" rel="noreferrer noopener" {...rest}>
    {children}
  </a>
);

const AvgCalcExample = () => {
  const Num = ({ children }) => (
    <span className={styles.number}>{children}</span>
  );
  
  return (
    <p className={styles.equation}>
      <span className={styles.lSide}>
        [ IMDB( <Num>9.2</Num> x 10 ) + Metacritic( <Num>100</Num> ) + Rotten
        Tomatoes( <Num>98</Num> ) ] / <Num>3</Num>{" "}
      </span>
      <span className={styles.equalIcon}>&asymp;</span>
      <span className={styles.rSide}>
        <b className={styles.result}>97</b>
      </span>
    </p>
  );
};

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <DocTitle>GMOAT - About the App</DocTitle>
      <section className={styles.container}>
        <ListerBlock title="Average List">
          <p>
            Top rated movies ranked by calculating the "average ratings" of the world most popular movies websites(IMDB, Metacritic, ...).
          </p>
          <p>E.g. The average rate of The Godfather is:</p>
          <AvgCalcExample />
        </ListerBlock>

        <ListerBlock title="IMDB List">
          <p>
            The Internet Movie Database is a gigantic compendium of movies, TV
            shows, and video games. Its primary use is to find detailed
            information about any actor, producer, or piece of content...
          </p>
          <p>
            <b>
              You can check out the full list of top movies of all time by{" "}
              <BlankLink href="https://www.imdb.com/">IMDb</BlankLink>, from{" "}
              <BlankLink href="https://www.imdb.com/chart/top?ref_=nv_mv_250">
                Here
              </BlankLink>
              .
            </b>
          </p>
        </ListerBlock>

        <ListerBlock title="Metacritic List">
          <p>
            Metacritic aggregates reviews of movies and TV shows, plus video
            games and music albums. It’s an important metric in the world of
            video games, but it can give you a good idea as to the quality of
            movies too.
          </p>
          <p>
            <b>
              You can check out the full list of top movies of all time by{" "}
              <BlankLink href="https://www.metacritic.com/">
                Metacritic
              </BlankLink>
              , from{" "}
              <BlankLink href="https://www.metacritic.com/browse/movies/score/metascore/all/filtered">
                Here
              </BlankLink>
              .
            </b>
          </p>
        </ListerBlock>

        <ListerBlock title="Rotten Tomatoes List">
          <p>
            Rotten Tomatoes is a trusted source for movie reviews sourced from
            critics. Every movie uses the “Tomatometer” to score the quality of
            a film. If the critic liked the movie, a red tomato appears by their
            review. When they don’t like it, you’ll see a green splat instead.
          </p>
          <p>
            <b>
              You can check out the full list of top movies of all time by{" "}
              <BlankLink href="https://www.rottentomatoes.com/">
                Rotten Tomatoes
              </BlankLink>
              , from{" "}
              <BlankLink href="https://www.rottentomatoes.com/top/bestofrt/">
                Here
              </BlankLink>
              .
            </b>
          </p>
        </ListerBlock>
      </section>
    </div>
  );
};

export default AboutPage;
