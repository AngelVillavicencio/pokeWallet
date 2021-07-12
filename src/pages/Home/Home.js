import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonList from "../../components/PokemonList/PokemonList";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState([]);
  const [index, setIndex] = useState(1);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  //search bar
  const [searchTerm, setSearchTerm] = useState("");

  const saveAllPokemons = async () => {
    let res = await getAllPokemon(initialURL + "?limit=100&offset=200");
    let _pokemonData = await Promise.all(
      res.results.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setAllPokemons(_pokemonData);
  };

  const searching = () => {
    const newList = list.filter((value, key) => {
      if (value.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return value;
    });
    setNewList(newList);
  };
  /// GETTER POKEMON
  async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  }

  async function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  }
  //saveAllPokemons();
  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(initialURL);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      await loadPokemon(res.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
    setIndex((index) => index + 1);
    searching();
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
    setIndex((index) => index - 1);
    searching();
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setList(_pokemonData);
  };

  return (
    <div className={styles.Home}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searching={searching}
      ></SearchBar>
      {loading ? (
        <>
          <div className={styles.gifloading}></div>
          <h1 style={{ textAlign: "center" }}>Cargando...</h1>
        </>
      ) : (
        <>
          {searchTerm == "" ? (
            <>
              <PokemonList list={list} mylist={false}></PokemonList>
            </>
          ) : (
            <>
              {newList.length > 0 ? (
                <PokemonList list={newList} mylist={false}></PokemonList>
              ) : (
                <p
                  style={{
                    fontSize: "35px",
                    fontWeight: "700",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Busque en otra página
                </p>
              )}
            </>
          )}
          <div className={styles.btns}>
            <button onClick={prev}>
              <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
            </button>
            <input type="text" value={index} readOnly></input>
            <button onClick={next}>
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
