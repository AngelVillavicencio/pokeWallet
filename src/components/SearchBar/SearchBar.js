import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
const SearchBar = ({ searchTerm, setSearchTerm, searching }) => {
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Busca por nombre"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          searching();
        }}
      ></input>
      <span>
        <SearchIcon></SearchIcon>
      </span>
    </div>
  );
};
export default SearchBar;
