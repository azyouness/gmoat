import React from "react";
import { Youtube } from "utils/helpers";
import styles from "./YoutubeVideo.module.scss";

const YoutubeVideo = ({ id, title, ...rest }) => (
  <iframe
    className={styles.video}
    title={title}
    src={Youtube.getEmbedUrl(id)}
    width="640"
    height="390"
    allowFullScreen
    {...rest}
  ></iframe>
);

export default YoutubeVideo;
