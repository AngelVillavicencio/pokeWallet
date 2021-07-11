import React from "react";
import styles from "./PokeDetail.module.css";

const PokeDetail = () => {
  return (
    <div className={styles.PokeDetail}>
      <div className={styles.PokeDetail_container}>
        <div>
          <img></img>
        </div>
        <div>
          <h2>Bulbasour</h2>
          <h4>Caracteristicas</h4>
          <span>
            <p>Height:height</p>
            <p>Weight:weight </p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default PokeDetail;
