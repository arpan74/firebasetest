import React from "react";
import logo from "./logo.svg";
import Firebase, { FirebaseContext } from "./Components/Firebase";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FirebaseContext.Provider value={new Firebase()}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
