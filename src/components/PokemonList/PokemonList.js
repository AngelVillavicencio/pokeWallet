import React, { useEffect, useContext } from "react";
import styles from "./PokemonList.module.css";
import Card from "../../components/Card/Card";
import UserContext from "../../context/User/UserContext";

const PokemonList = ({ list }) => {
  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext.getPokemons();
    console.log(userContext);
  }, []);

  return (
    <div className={styles.PokemonList}>
      {userContext.pokemons.length
        ? userContext.pokemons.map((pokemon) => {
            return (
              <Card
                key={pokemon.name}
                name={pokemon.name}
                urlPokemon={pokemon.url}
              ></Card>
            );
          })
        : null}
    </div>
  );
};
export default PokemonList;
