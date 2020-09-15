import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { Youtube } from "utils/helpers";
import { YT_THUMBNAIL_QUALITY } from 'utils/constants';
import { Modal, YoutubeVideo} from "common";
import styles from "./MovieVideos.module.scss";

const VideoItem = ({ onClick, video: { key, name } }) => {
  return (
    <li onClick={onClick} className={styles.video}>
      <img src={Youtube.getThumbnailById(key, YT_THUMBNAIL_QUALITY.MEDIUM)} alt={name} />
      <FaPlay className={styles.icon} />
    </li>
  );
};

const MovieVideos = ({ videos = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = video => e =>{
    e.preventDefault();
    setSelectedVideo(video);
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVideo(null);
  };

  return (
    <React.Fragment>
      <ul className={styles.videos}>
        {videos.map(video => <VideoItem key={video.key} video={video} onClick={handleVideoClick(video)} />)}
      </ul>
      {<Modal open={openModal} onClose={handleCloseModal}>
        {selectedVideo ? <YoutubeVideo id={selectedVideo.key} title={selectedVideo.name} /> : null}
      </Modal>}
    </React.Fragment>
  );
};

export default MovieVideos;