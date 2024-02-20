import React from "react";

import { ReactComponent as GameTitle } from "./assets/images/game-title.svg";
import { ReactComponent as IconPlay } from "./assets/images/icon-play.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="main">
      <div className="main-card">
        <GameTitle className="game-title" />
        <div className="icon-container">
          <IconPlay className="icon-play" />
        </div>
        <button type="button" className="button how-to-play">
          How To Play
        </button>
      </div>
    </div>
  );
};

export default App;
