import React from "react";
import "./Login.css";
import FormLogin from "../../components/FormLogin/FormLogin";
const Login = () => {
  return (
    <div className="Login">
      <div className="Welcome-text">
        <h1>
          Bienvenido a <br></br> <span>PokeWallet</span>
        </h1>
        <p>
          Un lugar <strong>seguro y práctico</strong> donde guardar tus pokemons
        </p>
      </div>
      <FormLogin></FormLogin>
    </div>
  );
};
export default Login;
