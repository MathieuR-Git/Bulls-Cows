import React from "react";
import Game from "./components/game";
import HowToPlay from "./components/howToPlay";
import "./App.css";

function App() {
  return (
    <div className="App App-header">
      <header className=" container">
        <Game />
        <HowToPlay />
      </header>
    </div>
  );
}

export default App;
