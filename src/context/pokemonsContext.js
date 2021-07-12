import React from "react";
import { pokemons } from "../reducers/pokemonsReducer";

export const Pokemons = React.createContext();
const initialState = {
  pokemons: [],
};

export const PokemonsProvider = (props) => {
  const [Pokemon, Dispatch] = React.useReducer(pokemons, initialState);
  const value = { Pokemon, Dispatch };

  return <Pokemons.Provider value={value}>{props.children}</Pokemons.Provider>;
};
