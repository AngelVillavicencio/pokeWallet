import React, { useState } from "react";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonList from "../../components/PokemonList/PokemonList";
const Home = () => {
  const [list, setList] = useState([]);
  /*useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=200")
      .then((res) => res.json())
      .then((res) => setList(res.results));
  }, []);
*/
  return (
    <div className={styles.Home}>
      <SearchBar></SearchBar>
      <PokemonList list={list}></PokemonList>
    </div>
  );
};
export default Home;
