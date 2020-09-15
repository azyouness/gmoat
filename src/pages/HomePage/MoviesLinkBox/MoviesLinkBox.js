import React from 'react';
import { Link } from "react-router-dom";
import { getImagePath } from "utils/helpers";
import { WebpImg } from "common";
import styles from "./MoviesLinkBox.module.scss";

const MoviesLinkBox = ({ to, image, title, caption, label = "Movies list" }) => {
  let extraClassName = "";
  if(to.includes("/average")) extraClassName = styles.average;
  if(to.includes("/imdb")) extraClassName = styles.imdb;

  return (
    <Link to={to} className={`${styles.linkBox} ${extraClassName}`}>
      <WebpImg src={getImagePath(image)} className={styles.image} alt="" />
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.caption} dangerouslySetInnerHTML={{ __html: caption}}></span>
      </div>
    </Link>
  );
}

export default MoviesLinkBox;