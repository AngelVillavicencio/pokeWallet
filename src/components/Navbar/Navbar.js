import React, { useContext, useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useHistory, Link, withRouter } from "react-router-dom";
//import context
import { Auth } from "../../context/authContext";
//import firebase
import firebase from "../../firebase/config";

const Navbar = (props) => {
  const [userState, setUserState] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const { state, dispatch } = React.useContext(Auth);
  let history = useHistory();
  //console.log(history);
  const pathname = history.location.pathname;
  //console.log(pathname);

  const styleBtn = {
    backgroundColor: "rgba(196, 196, 196, 0.41)",
    color: "white",
  };
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
        <Link style={pathname == "/" ? styleBtn : {}} to="/">
          Pokemons
        </Link>
        <Link
          style={pathname == "/myPokemons" ? styleBtn : {}}
          to="/myPokemons"
        >
          Mis Pokemons
        </Link>
        <Link onClick={logout}>Salir</Link>
      </React.Fragment>
    );
  } else {
    buttons = (
      <React.Fragment>
        <Link style={pathname == "/" ? styleBtn : {}} to="/">
          Pokemons
        </Link>
        <Link style={pathname == "/login" ? styleBtn : {}} to="/login">
          Ingresar
        </Link>
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
