import React, { useEffect } from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <div>
          <p className="txt-logo-navbar">PokeWallet</p>
        </div>
        <div className="btns-navbar">
          <button>All Pokemons</button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
