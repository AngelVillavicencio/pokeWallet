export const pokemons = (state, action) => {
  switch (action.type) {
    case "FETCH_POKEMONS":
      return { ...state, pokemons: action.payload };

    case "REMOVE_POKEMONS":
      return { ...state, pokemons: action.payload };

    default:
      return state;
  }
};
