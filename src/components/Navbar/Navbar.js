import React, { useContext, useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Navbar = (props) => {
  const userContext = useContext(UserContext);
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(userContext.logged);
  }, []);
  return (
    <div className={styles.Navbar}>
      <div className={styles["Navbar-container"]}>
        <div>
          <p className={styles["txt-logo-navbar"]}>PokeWallet</p>
        </div>
        <div className={styles["btns-navbar"]}>
          <Link to="/">All Pokemons</Link>
          {state ? (
            <>
              <Link to="/myPokemons">My Pokemons</Link>
              <Link to="/">Log Out</Link>
            </>
          ) : (
            <Link to="/logIn">Log In</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
