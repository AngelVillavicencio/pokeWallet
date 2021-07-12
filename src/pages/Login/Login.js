import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import styles from "./Login.module.css";
import FormLogin from "../../components/FormLogin/FormLogin";
import { Auth } from "../../context/authContext";
import firebase from "../../firebase/config";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /// tiene una cuenta
  const [hasaccount, setHasaccount] = useState(true);

  // falta entender
  const [routeRedirect, setRouteRedirect] = useState(false);
  const { state, dispatch } = React.useContext(Auth);

  //function login

  const login = async (e) => {
    e.preventDefault();
    let response = await firebase.login(email, password);
    if (response.hasOwnProperty("message")) {
      console.log(response.message);
      alert("Has colocado mal algo o no existe tu usuario");
    } else {
      setRouteRedirect(true);
      return dispatch({
        type: "LOGIN",
        payload: response.user,
      });
    }
  };

  const signin = async (e) => {
    e.preventDefault();

    console.log(state);

    let response = await firebase.signin(email, password);

    if (response.hasOwnProperty("message")) {
      console.log(response.message);
      alert(response.message);
    } else {
      console.log(response.user);
      alert("Ya te encuentras registrado");
      setRouteRedirect(true);
      return dispatch({
        type: "SIGNIN",
        payload: response.user,
      });
    }
  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.Login}>
      <div className={styles.WelcomeText}>
        <h1>
          Bienvenido a <br></br> <span>PokeWallet</span>
        </h1>
        <p>
          Un lugar <strong>seguro y práctico</strong> donde guardar tus pokemons
        </p>
      </div>
      <FormLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogIn={login}
        handleSignIn={signin}
        hasaccount={hasaccount}
        setHasaccount={setHasaccount}
      ></FormLogin>
    </div>
  );
};
export default Login;
