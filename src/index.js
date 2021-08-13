import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import {FirebaseContext} from "./context/firebase"
console.log(firebase,"g");
console.log(FirebaseContext,"g");
ReactDOM.render(
  <>
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles></GlobalStyles>
    <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
