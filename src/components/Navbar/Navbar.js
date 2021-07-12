import React, { useContext, useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, withRouter } from "react-router-dom";
//import context
import { Auth } from "../../context/authContext";
//import firebase
import firebase from "../../firebase/config";

const Navbar = (props) => {
  const [userState, setUserState] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const { state, dispatch } = React.useContext(Auth);

  useEffect(() => {
    firebase.getUserState().then((user) => {
      if (user) {
        setUserState(user);
        setUserEmail(user.email);
      }
    });
  });

  const logout = () => {
    firebase.logout();
    setUserState(null);
    setUserEmail("");
    props.history.replace("/login");
    return dispatch({
      type: "LOGOUT",
      payload: {},
    });
  };

  let buttons;
  if (userState != null || state.user.hasOwnProperty("user")) {
    buttons = (
      <React.Fragment>
        <Link to="/">Pokemons</Link>
        <Link to="/myPokemons">Mis Pokemons</Link>
        <Link onClick={logout}>Salir</Link>
      </React.Fragment>
    );
  } else {
    buttons = (
      <React.Fragment>
        <Link to="/">Pokemons</Link>
        <Link to="/logIn">Ingresar</Link>
      </React.Fragment>
    );
  }
  return (
    <div className={styles.Navbar}>
      <div className={styles["Navbar-container"]}>
        <div>
          <p className={styles["txt-logo-navbar"]}>PokeWallet</p>
        </div>
        <div className={styles["btns-navbar"]}>{buttons}</div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
