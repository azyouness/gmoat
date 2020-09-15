import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => (
  <div className={styles.logo}>
    <RouterLink to="/">
      <h2 className={styles.legend}>G<span>M</span>OAT</h2>
      <h3 className={styles.caption}>Greatest <span>M</span>ovies Of All Time</h3>
    </RouterLink>
  </div>
);

export default Logo;