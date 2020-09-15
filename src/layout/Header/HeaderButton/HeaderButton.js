import React from "react";
import { MdClose as CloseIcon } from "react-icons/md";
import styles from "./HeaderButton.module.scss";

const HeaderButton = ({ onClick, icon, active = false, className = "" }) => {
  const Icon = active ? CloseIcon : icon;

  return (
    <button
      type="button"
      onClick={onClick}
      title="Search &amp; Sort movies"
      className={`${styles.button} ${className} ${active ? styles.active : ""}`}
    >
      <Icon className={styles.icon} />
    </button>
  );
};

export default HeaderButton;
