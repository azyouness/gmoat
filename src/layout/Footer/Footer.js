import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.scss";

const GithubLink = () => (
  <a
    title="Source code link"
    href="https://github.com/azyouness/gmoat"
    target="_blank"
    rel="noreferrer noopener"
  >
    <FaGithub />
  </a>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p>
            {new Date().getFullYear()} &copy; <b>G<span>M</span>OAT</b> - No Right Reserved ...
          </p>
        </div>
        <div className={styles.links}>
          <GithubLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
