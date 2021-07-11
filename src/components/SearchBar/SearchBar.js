import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <input type="text"></input>
      <span>
        <SearchIcon></SearchIcon>
      </span>
    </div>
  );
};
export default SearchBar;
