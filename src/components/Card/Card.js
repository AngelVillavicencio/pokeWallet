import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Card = ({ pokemon, history }) => {
  const handleClick = () => {
    history.push(`/pokemon/${pokemon.id}/`, {
      name: pokemon.name,
      height: pokemon.height,
    });
  };
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
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </span>
        <button>Agregar a mi lista</button>
      </div>
    </div>
  );
};

export default withRouter(Card);
