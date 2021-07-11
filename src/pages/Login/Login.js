import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import FormLogin from "../../components/FormLogin/FormLogin";

import UserContext from "../../context/User/UserContext";

const Login = () => {
  const userContext = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    userContext.handleLogin(email, password);
  };

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
        handleSignUp={handleSignUp}
      ></FormLogin>
    </div>
  );
};
export default Login;
