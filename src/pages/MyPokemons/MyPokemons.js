import React, { useEffect, useState } from "react";
import styles from "./MyPokemons.module.css";
import PokemonList from "../../components/PokemonList/PokemonList";
import firebase from "../../firebase/config";
import { Auth } from "../../context/authContext";
import { Pokemons } from "../../context/pokemonsContext";

const MyPokemons = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const { state, dispatch } = React.useContext(Auth);
  const { Pokemon, Dispatch } = React.useContext(Pokemons);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonsArray = await firebase.getpokemons(state.user.uid);
        console.log(pokemonsArray);
        //setList(pokemonsArray);
        setLoading(false);
        setList(pokemonsArray);
        console.log("useEffectMyPokemons");
        return Dispatch({
          type: "FETCH_POKEMONS",
          payload: pokemonsArray,
        });
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.MyPokemons}>
        <div className={styles.gifloading}></div>
        <h1 style={{ textAlign: "center" }}>Cargando...</h1>
      </div>
    );
  }

  /*if (Pokemon.pokemons.length == 0) {
    return (
      <h1 style={{ textAlign: "center" }}>
        No Hay Pokemons aún, agrega algunos a tu lista :)
      </h1>
    );
  }*/
  return (
    <div className={styles.MyPokemons}>
      {list.length ? (
        <PokemonList list={list}></PokemonList>
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
