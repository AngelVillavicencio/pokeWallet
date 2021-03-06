import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PokeDetail from "./pages/PokeDetail/PokeDetail";
import MyPokemons from "./pages/MyPokemons/MyPokemons";
import NotFound from "./pages/NotFound/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/mypokemons">
          <MyPokemons></MyPokemons>
        </Route>
        <Route exact path="/pokemon/:id">
          <PokeDetail></PokeDetail>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
