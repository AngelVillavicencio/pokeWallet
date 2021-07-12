import React, { useEffect, useState } from "react";
import styles from "./PokeDetail.module.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { Pokemons } from "../../context/pokemonsContext";
import { Auth } from "../../context/authContext";

const PokeDetail = ({ location }) => {
  let history = useHistory();
  const [detail, setDetail] = useState({});
  const pathname = history.location.pathname;
  console.log(pathname);
  //console.log(location);

  const { savePokemon, deletePokemonOfMyList } = React.useContext(Pokemons);
  const { state, dispatch } = React.useContext(Auth);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2" + pathname).then((res) => {
      setDetail(res.data);
      if (detail) setLoading(false);
    });
  }, []);

  return (
    <div className={styles.PokeDetail}>
      <div className={styles.PokeDetail_container}>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
            <div className={styles["image-container"]}>
              <img src={detail.sprites.front_default}></img>
            </div>
            <div className={styles["data-container"]}>
              <h2>{detail.name.toUpperCase()}</h2>
              <h4>Caracteristicas</h4>
              <span>
                <p>Altura:{detail.height} m </p>
                <p>Peso:{detail.weight} kg </p>
              </span>
              <button onClick={() => savePokemon(state.user.uid, detail)}>
                Agregar a mi lista
              </button>
            </div>
          </>
        )}
      </div>
      <Link onClick={() => history.goBack()}>Regresar</Link>
    </div>
  );
};
export default PokeDetail;
