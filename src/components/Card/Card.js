import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/config";

import { Auth } from "../../context/authContext";
import { Pokemons } from "../../context/pokemonsContext";

const Card = ({ pokemon, history }) => {
  const { state, dispatch } = React.useContext(Auth);
  const { Pokemon, Dispatch } = React.useContext(Pokemons);

  console.log(history.location.pathname);
  const path = history.location.pathname;
  const [btnstate, setBtnstate] = useState(false);
  const handleClick = () => {
    history.push(`/pokemon/${pokemon.id}/`, {
      name: pokemon.name,
      height: pokemon.height,
    });
  };

  async function savePokemon(uid, pokemon) {
    let response = await firebase.savePokemon(uid, pokemon);
    alert("Se agregó el pokemon");
  }

  async function eliminatePokemon(uid, id) {
    let response = await firebase.deletePokemonOfMyList(uid, id);
    alert("Se eliminó un pokemon");
    async function fetchData() {
      try {
        const pokemonsArray = await firebase.getpokemons(state.user.uid);
        console.log(pokemonsArray);
        return Dispatch({
          type: "FETCH_POKEMONS",
          payload: pokemonsArray,
        });
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }

  useEffect(() => {
    if (path === "/myPokemons") {
      setBtnstate(true);
    }
  }, []);

  return (
    <div className={styles.Card}>
      <div className={styles["Card-image"]}>
        <img
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          src={pokemon.sprites.front_default}
          height="100%"
          alt={pokemon.name}
        ></img>
      </div>
      <div className={styles["Card-detail"]}>
        <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
          {pokemon.name.toUpperCase()}
        </h2>
        <span>
          <p>Altura: {pokemon.height} cm</p>
          <p>Peso: {pokemon.weight} kg</p>
        </span>
        <button
          onClick={() =>
            btnstate
              ? eliminatePokemon(state.user.uid, pokemon.id)
              : state.user.uid
              ? savePokemon(state.user.uid, pokemon)
              : alert("Inicia sesión primero")
          }
        >
          {btnstate ? "Eliminar de mi lista" : "Agregar a mi lista"}
        </button>
      </div>
    </div>
  );
};

export default withRouter(Card);
