import React, { useEffect, useContext } from "react";
import styles from "./PokemonList.module.css";
import Card from "../../components/Card/Card";

const PokemonList = ({ list }) => {
  return (
    <div className={styles.PokemonList}>
      {list.length ? (
        list.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon}></Card>;
        })
      ) : (
        <h1 style={{ textAlign: "center" }}>
          No Hay Pokemons aún, agrega algunos a tu lista :)
        </h1>
      )}
    </div>
  );
};
export default PokemonList;
