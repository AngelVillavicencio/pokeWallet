import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PokeDetail from "./pages/PokeDetail/PokeDetail";
import NotFound from "./pages/NotFound/NotFound";
import UserState from "./context/User/UserState";

function App() {
  return (
    <UserState>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/pokemon/:id">
              <PokeDetail></PokeDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserState>
  );
}

export default App;
