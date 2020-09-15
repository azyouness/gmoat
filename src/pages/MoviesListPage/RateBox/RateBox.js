import React from "react";
import { padStart } from "lodash"; // hmm Lodash is already a dependency of create-react-app, so no need to install it
import { FaStar, FaHashtag } from "react-icons/fa";
import styles from "./RateBox.module.scss";

const RateBox = ({ type, value }) => (
  <div className={styles.value}>
    <span className={styles.label}>{type === "rate" ? "Rate" : "Rank"}</span>
    <div className={styles.row}>
      <span className={styles.icon}>
        {type === "rate" ? <FaStar /> : <FaHashtag />}
      </span>
      <span className={styles.number}>
        {type === "rate"
          ? value < 10 ? Number(value).toFixed(1) : Math.round(value)
          : padStart(value, 2, "0")}
      </span>
    </div>
  </div>
);

export default RateBox;
