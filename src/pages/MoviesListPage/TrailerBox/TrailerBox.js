import React from 'react';
import { MdPlayCircleOutline as PlayIcon } from "react-icons/md";
import { Youtube } from "utils/helpers";
import styles from "./TrailerBox.module.scss";

const TrailerBox = ({ id, title = "", onClick }) => {
  return (
    <figure className={styles.trailer} onClick={onClick}>
      <span className={styles.playIcon}><PlayIcon /></span>
      <img src={Youtube.getThumbnailById(id)} alt={title} />
      <figcaption>
        Watch trailer
      </figcaption>
    </figure>
  );
};

export default TrailerBox;