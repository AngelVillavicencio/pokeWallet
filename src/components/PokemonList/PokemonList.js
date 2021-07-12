import React, { useEffect, useContext } from "react";
import styles from "./PokemonList.module.css";
import Card from "../../components/Card/Card";

const PokemonList = ({ list }) => {
  return (
    <div className={styles.PokemonList}>
      {list.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon}></Card>;
      })}
    </div>
  );
};
export default PokemonList;
