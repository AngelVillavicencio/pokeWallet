import React, { useEffect, useState } from "react";
import styles from "./MyPokemons.module.css";
import PokemonList from "../../components/PokemonList/PokemonList";
import firebase from "../../firebase/config";
import { Auth } from "../../context/authContext";
import { Pokemons } from "../../context/pokemonsContext";

const MyPokemons = () => {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = React.useContext(Auth);
  const { Pokemon, Dispatch, getpokemons } = React.useContext(Pokemons);

  useEffect(() => {
    try {
      getpokemons(state.user.uid);
      //debugger;
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [Pokemon.pokemons]);

  if (loading) {
    return (
      <div className={styles.MyPokemons}>
        <div className={styles.gifloading}></div>
        <h1 style={{ textAlign: "center" }}>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className={styles.MyPokemons}>
      {Pokemon.pokemons.length > 0 ? (
        <PokemonList list={Pokemon.pokemons}></PokemonList>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>
            No Hay Pokemons aún, agrega algunos a tu lista :)
          </h1>
        </>
      )}
    </div>
  );
};
export default MyPokemons;
