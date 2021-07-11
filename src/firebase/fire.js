import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAs7UBIpMDBV1vZmeN0szF367ctLJMh7kM",
  authDomain: "pokewallet-a03ef.firebaseapp.com",
  projectId: "pokewallet-a03ef",
  storageBucket: "pokewallet-a03ef.appspot.com",
  messagingSenderId: "819835590475",
  appId: "1:819835590475:web:89b975f9eb5b2fd0c87ace",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
