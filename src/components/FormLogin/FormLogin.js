import React from "react";
import styles from "./FormLogin.module.css";

const FormLogin = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogIn,
  handleSignIn,
  hasaccount,
  setHasaccount,
}) => {
  console.log(handleSignIn);
  return (
    <div className={styles.FormLogin}>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className={styles.btnLogIn}
          onClick={hasaccount ? handleLogIn : handleSignIn}
        >
          {hasaccount ? "Ingresar" : "Registrarse"}
        </button>
        <p
          style={{
            color: "black",
            margin: "5px 0px",
          }}
        >
          {hasaccount ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
          <strong
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setHasaccount(!hasaccount)}
          >
            {!hasaccount ? "Ingresa" : "Registrate"}
          </strong>
        </p>
      </div>
    </div>
  );
};
export default FormLogin;
