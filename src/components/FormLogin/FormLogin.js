import React from "react";
import styles from "./FormLogin.module.css";

const FormLogin = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
}) => {
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
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className={styles.btnLogIn} onClick={handleSignUp}>
          Log In
        </button>
      </div>
    </div>
  );
};
export default FormLogin;
