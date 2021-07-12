import React, { useState } from "react";
import styles from "./MyPokemons.module.css";
import PokemonList from "../../components/PokemonList/PokemonList";

const MyPokemons = () => {
  const [list, setList] = useState([]);
  return (
    <div className={styles.MyPokemons}>
      <div>
        <PokemonList list={list}></PokemonList>
      </div>
    </div>
  );
};
export default MyPokemons;
