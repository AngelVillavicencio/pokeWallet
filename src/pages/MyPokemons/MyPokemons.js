import React, { useEffect, useState } from "react";
import styles from "./MyPokemons.module.css";
import PokemonList from "../../components/PokemonList/PokemonList";
import firebase from "../../firebase/config";
import { Auth } from "../../context/authContext";
import { Pokemons } from "../../context/pokemonsContext";

const MyPokemons = () => {
  const [list, setList] = useState([]);
  const { state, dispatch } = React.useContext(Auth);
  const { Pokemon, Dispatch } = React.useContext(Pokemons);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonsArray = await firebase.getpokemons(state.user.uid);
        console.log(pokemonsArray);
        //setList(pokemonsArray);
        setLoading(false);
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
  return (
    <div className={styles.MyPokemons}>
      {loading ? (
        <p>cargando...</p>
      ) : (
        <div>
          <PokemonList list={Pokemon.pokemons}></PokemonList>
        </div>
      )}
    </div>
  );
};
export default MyPokemons;
