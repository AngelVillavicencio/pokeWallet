import { UnsubscribeOutlined } from "@material-ui/icons";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyAs7UBIpMDBV1vZmeN0szF367ctLJMh7kM",
  authDomain: "pokewallet-a03ef.firebaseapp.com",
  projectId: "pokewallet-a03ef",
  storageBucket: "pokewallet-a03ef.appspot.com",
  messagingSenderId: "819835590475",
  appId: "1:819835590475:web:89b975f9eb5b2fd0c87ace",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.database();
    //this.storage = firebase.storage();
  }

  //login

  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        return err;
      });
    return user;
  }

  //signIn

  /*
firebase.firestore().collection("users").doc(cred.user.uid).set({
          email: cred.user.email,
          mypokemons : []
        });
  */

  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        return err;
      });
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
        return err;
      });
    return logout;
  }

  async getUserState() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  /// DATA BASE

  /* getPokemons(uid) {
    let pokemonArray = [];
    const pokemons = await firebase.firestore().collection(uid).get();
    pokemons.forEach((doc) => {
      pokemonArray.push({ id: doc.id, name: doc.name });
    });
    return pokemonArray;
  }*/

  
}

export default new Firebase();
