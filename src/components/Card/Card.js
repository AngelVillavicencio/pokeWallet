import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ urlPokemon }) => {
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch(urlPokemon)
      .then((res) => res.json())
      .then((res) => setCard(res));
  }, []);

  return (
    <div className={styles.Card}>
      <div className={styles["Card-image"]}>
        <img src={card} alt={card.name}></img>
      </div>
      <div className={styles["Card-detail"]}>
        <Link to="/pokemon/51">
          <h2>{card.name}</h2>
        </Link>
        <span>
          <p>Height:{card.height}</p>
          <p>Weight:{card.weight}</p>
        </span>
        <button>Agregar a mi lista</button>
      </div>
    </div>
  );
};

export default Card;
