import { GET_POKEMONS, GET_PROFILE, GET_LOGGED } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        user: payload,
      };
    case GET_LOGGED:
      return {
        ...state,
        logged: payload,
      };
    default:
      return state;
  }
};
