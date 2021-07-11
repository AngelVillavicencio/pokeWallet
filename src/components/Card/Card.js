import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ pokemon }) => {
  return (
    <div className={styles.Card}>
      <div className={styles["Card-image"]}>
        <img
          src={pokemon.sprites.front_default}
          height="100%"
          alt={pokemon.name}
        ></img>
      </div>
      <div className={styles["Card-detail"]}>
        <Link to="/pokemon/51">
          <h2>{pokemon.name}</h2>
        </Link>
        <span>
          <p>Height:{pokemon.height}</p>
          <p>Weight:{pokemon.weight}</p>
        </span>
        <button>Agregar a mi lista</button>
      </div>
    </div>
  );
};

export default Card;
