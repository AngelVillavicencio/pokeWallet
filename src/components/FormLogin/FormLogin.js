import React from "react";
import "./FormLogin.css";

const FormLogin = () => {
  return (
    <div className="FormLogin">
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
        ></input>
        <button className="btn-LogIn">Log In</button>
      </div>
    </div>
  );
};
export default FormLogin;
