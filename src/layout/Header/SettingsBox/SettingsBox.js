import React, { useState, useEffect } from "react";
import { FaSortNumericDown as SortDownIcon, FaSortNumericUp as SortUpIcon } from "react-icons/fa";
import { useSelector, getSearchKeyword, getSort } from "storeProvider/selectors";
import styles from "./SettingsBox.module.scss";

const SortIcon = ({ asc = true }) => {
  const SelectedIcon = asc ? SortDownIcon : SortUpIcon;
  return (<SelectedIcon className={styles.icon} />);
};

const SettingsBox = ({ open = false, onSearchChange, onSortChange }) => {
  const initSearch = useSelector(getSearchKeyword);
  const initSort = useSelector(getSort);

  const [searchValue, setSearchValue] = useState(initSearch);
  const [orderBy, setOrderBy] = useState(initSort.by);
  const [orderAsc, setOrderAsc] = useState(initSort.asc);
  const [typingTimeout, setTypingTimeout] = useState(0);

  // on close reset inputs
  useEffect(resetInputsOnClose, [open]);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        onSearchChange(value);
      }, 500)
    );
  };

  const handleOrderByClick = (by) => (e) => {
    e.preventDefault();
    const asc = by === orderBy ? !orderAsc : true;
    setOrderBy(by);
    setOrderAsc(asc);
    onSortChange(by, asc);
  };

  function resetInputsOnClose() {
    if (open === false) {
      setOrderBy(initSort.by);
      setOrderAsc(initSort.asc);
      setSearchValue(initSearch);
    }
  }

  return (
    <div className={`${styles.box} ${styles[open ? "open" : "close"]}`}>
      <input
        type="search"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Find movie by name"
        className={`${searchValue.trim().length >= 2 ? styles.active : ""}`}
      />
      <button
        onClick={handleOrderByClick("rank")}
        className={`${orderBy === "rank" ? styles.active : ""}`}
      >
        <span className={styles.text}>Sort by Rank</span>{" "}
        <SortIcon asc={orderBy === "rank" && orderAsc} />
      </button>
      <button
        onClick={handleOrderByClick("year")}
        className={`${orderBy === "year" ? styles.active : ""}`}
      >
        <span className={styles.text}>Sort by Year</span>{" "}
        <SortIcon asc={orderBy === "year" && orderAsc} />
      </button>
    </div>
  );
};

export default SettingsBox;
