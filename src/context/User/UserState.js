import React, { useEffect, useReducer } from "react";
import axios from "axios";

import UserContext from "./UserContext.js";
import UserReducer from "./UserReducer";

import { GET_PROFILE, GET_POKEMONS, GET_LOGGED } from "../types";

// FIREBASE
import fire from "../../firebase/fire";

const UserState = (props) => {
  const initialState = {
    pokemons: [],
    logged: false,
    user: {},
    myPokemons: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getPokemons = async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=500&offset=200"
      );
      const data = res.data.results;
      console.log(data);
      dispatch({ type: GET_POKEMONS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getProfile = async (id) => {
    try {
      const res = await axios.get("https://reqres.in/api/users/" + id);
      const { data } = res;
      dispatch({ type: GET_PROFILE, payload: data.data });
    } catch (error) {}
  };
  const handleLogin = (email, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: GET_PROFILE, payload: user.user });

        //console.log(state);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            //setEmailError(err.message);
            break;
          case "auth/wrong-password":
            //setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const handleSignup = (email, password) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("sign Up");
        console.log(user);
        dispatch({ type: GET_PROFILE, payload: user.user });
        console.log("User general:");
        console.log(state.user);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            //setEmailError(err.message);
            break;
          case "auth/weak-password":
            //setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        //setUser(user)
        dispatch({ type: GET_LOGGED, payload: true });
        console.log(user);
      } else {
        //setUser("");
      }
    });
  };

  useEffect(() => {
    console.log(state);
    authListener();
  }, []);

  return (
    <UserContext.Provider
      value={{
        pokemons: state.pokemons,
        user: state.user,
        getPokemons,
        getProfile,
        handleSignup,
        handleLogin,
        handleLogOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
