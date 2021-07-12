import React from "react";
import { pokemons } from "../reducers/pokemonsReducer";
import firebase from "firebase/app";

export const Pokemons = React.createContext();
const initialState = {
  pokemons: [],
};

export const PokemonsProvider = (props) => {
  const [Pokemon, Dispatch] = React.useReducer(pokemons, initialState);

  async function savePokemon(uid, pokemon) {
    const { name } = pokemon;
    const id = pokemon.id;

    firebase.database().ref(`mypokemons/${uid}/${id}`).set(pokemon);
  }

  async function getpokemons(uid) {
    firebase
      .database()
      .ref(`mypokemons/${uid}`)
      .on("value", (snapshot) => {
        let myPokemons = [];
        snapshot.forEach((snap) => {
          myPokemons.push(snap.val());
        });
        Dispatch({
          type: "FETCH_POKEMONS",
          payload: myPokemons,
        });
      });
  }

  async function deletePokemonOfMyList(uid, id) {
    firebase.database().ref(`mypokemons/${uid}/${id}`).remove();
    const pokemons = Pokemon.pokemons.filter((pokemon) => pokemon.id !== id);
    debugger;
    Dispatch({
      type: "REMOVE_POKEMONS",
      payload: pokemons,
    });
  }
  //debugger;
  const value = {
    Pokemon,
    Dispatch,
    savePokemon,
    getpokemons,
    deletePokemonOfMyList,
  };

  return <Pokemons.Provider value={value}>{props.children}</Pokemons.Provider>;
};
