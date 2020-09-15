import React from "react";
import { FaStar, FaHashtag } from "react-icons/fa";
import styles from "./MovieRates.module.scss";

const MovieRates = ({ rates }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {rates.map((row) => (
              <th key={row.name}>{row.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><FaHashtag className={styles.icon} /> Rank</th>
            {rates.map((row) => (
              <td key={row.name}>{row.rank === 0 ? "+100" : row.rank}</td>
            ))}
          </tr>
          <tr>
            <th><FaStar className={styles.icon} /> Rate</th>
            {rates.map(({ name, rate }) => (
              <td key={name}>{rate > 10 ? Math.round(rate) : rate.toFixed(1)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieRates;
